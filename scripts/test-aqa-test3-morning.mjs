import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const firstScript = readFileSync(new URL('aqa-test3-quiz.js', root), 'utf8');
const morningScript = readFileSync(new URL('aqa-test3-morning-quiz.js', root), 'utf8');
const source = readFileSync(new URL('language-sources/Niko_Instructional_Text_Revision_Table.md', root), 'utf8');
const terms = source.split('\n').filter(l => l.startsWith('| **★')).map(l => l.split('**')[1].replace('★ ', '').split('｜')[0]);
function fakeRoot(progressId) {
  const progress = { textContent: '' };
  const feedback = Array.from({ length: 23 }, () => ({ hidden: true, textContent: '', innerHTML: '', dataset: {} }));
  const events = {};
  const form = { reset() {}, addEventListener(type, fn) { events[type] = fn; } };
  return {
    innerHTML: '', progress, feedback, events,
    querySelector(selector) {
      if (selector === 'form') return form;
      if (selector === `#${progressId}`) return progress;
      return feedback[Number(selector.match(/\d+$/)[0]) - 1];
    },
    querySelectorAll() { return feedback; }
  };
}
class Input { constructor(prefix, i, answer) { this.type = 'radio'; this.name = `${prefix}-question-${i + 1}`; this.value = String(answer); } }
const first = fakeRoot('test3QuizProgress');
const morning = fakeRoot('test3MorningProgress');
const pageshow = [];
const context = {
  window: { dispatchEvent() {}, addEventListener(type, fn) { if (type === 'pageshow') pageshow.push(fn); } },
  document: { getElementById(id) { return id === 'aqaTest3Quiz' ? first : morning; } },
  HTMLInputElement: Input, Event: class Event {}
};
vm.runInNewContext(firstScript, context);
vm.runInNewContext(morningScript, context);
const original = {};
vm.runInNewContext(execFileSync('git', ['show', 'HEAD:aqa-test3-quiz.js'], { cwd: root, encoding: 'utf8' }), { window: original });
assert.equal(JSON.stringify(context.window.AQA_TEST3_MCQ), JSON.stringify(original.AQA_TEST3_MCQ), 'Original 23 question contents must remain unchanged');
const questions = context.window.AQA_TEST3_MORNING_MCQ;
assert.equal(questions.length, 23);
assert.deepEqual([...questions.map(q => q.termIndex)].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
const counts = [0, 0, 0, 0];
const oldSentences = new Set(context.window.AQA_TEST3_MCQ.map(q => q.sentence));
for (const q of questions) {
  assert.equal(q.term, terms[q.termIndex - 1]);
  assert.equal(q.options.length, 4);
  assert.equal(new Set(q.options).size, 4);
  assert.equal(q.feedback.length, 4);
  assert(q.feedback.every(reason => reason.length > 12));
  assert(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
  assert(q.sentence.length > 0 && !oldSentences.has(q.sentence), 'Use new examples in every question');
  counts[q.answer]++;
}
assert.equal(new Set(questions.map(q => q.sentence)).size, 23);
assert(Math.max(...counts) - Math.min(...counts) <= 1);
context.window.renderAqaTest3Quiz();
context.window.renderAqaTest3Quiz({ rootId: 'aqaTest3MorningQuiz', questions, prefix: 'test3-morning', progressId: 'test3MorningProgress', formId: 'test3MorningForm', heading: 'Morning Review', intro: 'Second set' });
assert.equal((morning.innerHTML.match(/type="radio"/g) || []).length, 92);
assert.equal((morning.innerHTML.match(/aria-live="polite" hidden/g) || []).length, 23);
morning.events.change({ target: new Input('test3-morning', 0, 0) });
assert.equal(morning.feedback[0].dataset.correct, 'false');
assert.equal(morning.feedback[0].hidden, false);
assert(morning.feedback.slice(1).every(f => f.hidden));
assert(first.feedback.every(f => f.hidden));
assert.equal(first.progress.textContent, '已答 0 / 23 · 答对 0 / 23');
questions.forEach((q, i) => morning.events.change({ target: new Input('test3-morning', i, q.answer) }));
assert.equal(morning.progress.textContent, '已答 23 / 23 · 答对 23 / 23');
first.events.change({ target: new Input('test3', 0, 2) });
assert.equal(first.progress.textContent, '已答 1 / 23 · 答对 1 / 23');
assert.equal(morning.progress.textContent, '已答 23 / 23 · 答对 23 / 23');
pageshow.forEach(fn => fn());
assert([first, morning].every(r => r.progress.textContent === '已答 0 / 23 · 答对 0 / 23' && r.feedback.every(f => f.hidden && !f.textContent)));
assert(!/(?:localStorage|sessionStorage)\s*\.|document\.cookie|fetch\s*\(/.test(firstScript + morningScript));
const page = readFileSync(new URL('index.html', root), 'utf8');
assert(page.indexOf('id="aqaTest3MorningQuiz"') > page.indexOf('id="aqaTest3Quiz"'));
console.log(`PASS: separate new 23-question set, every starred term once, answer balance ${counts.join('/')}, no reused examples, independent feedback/scores, refresh clears both sets, first set unchanged.`);
