import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const script = readFileSync(new URL('aqa-test3-quiz.js', root), 'utf8');
const page = readFileSync(new URL('index.html', root), 'utf8');
const source = readFileSync(new URL('language-sources/Niko_Instructional_Text_Revision_Table.md', root), 'utf8');
const terms = source.split('\n').filter(line => line.startsWith('| **★')).map(line => line.split('**')[1].replace('★ ', '').split('｜')[0]);
const events = {};
const pageEvents = {};
const progress = { textContent: '' };
const feedback = Array.from({ length: 23 }, () => ({ hidden: true, textContent: '', innerHTML: '', dataset: {} }));
let resets = 0;
const form = { reset() { resets++; }, addEventListener(type, callback) { events[type] = callback; } };
const quizRoot = {
  innerHTML: '',
  querySelector(selector) {
    if (selector === 'form') return form;
    if (selector === '#test3QuizProgress') return progress;
    return feedback[Number(selector.match(/\d+$/)[0]) - 1];
  },
  querySelectorAll() { return feedback; }
};
class FakeInput { constructor(index, value) { this.type = 'radio'; this.name = `test3-question-${index + 1}`; this.value = String(value); } }
const context = {
  window: { addEventListener(type, callback) { pageEvents[type] = callback; }, dispatchEvent() {} },
  document: { getElementById(id) { assert.equal(id, 'aqaTest3Quiz'); return quizRoot; } },
  HTMLInputElement: FakeInput, Event: class Event {}
};
vm.runInNewContext(script, context);
const questions = context.window.AQA_TEST3_MCQ;
assert.equal(questions.length, 23);
assert.deepEqual([...questions.map(q => q.termIndex)].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
const answerCounts = [0, 0, 0, 0];
questions.forEach(q => {
  assert.equal(q.term, terms[q.termIndex - 1], `Target must match starred term ${q.termIndex}`);
  assert.equal(q.options.length, 4);
  assert.equal(q.feedback.length, 4);
  assert.equal(new Set(q.options).size, 4);
  assert(q.options.every(option => option.length > 0) && q.feedback.every(reason => reason.length > 12));
  assert(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
  answerCounts[q.answer]++;
});
assert(Math.max(...answerCounts) - Math.min(...answerCounts) <= 1, 'Balance answer positions');
assert(!/(?:localStorage|sessionStorage)\s*\.|document\.cookie|fetch\s*\(/.test(script), 'Responses must never be persisted or sent');
assert(page.includes('renderAqaTest3Quiz();'));
assert(page.indexOf('id="aqaTest3Quiz"') > page.indexOf('id="aqaTest3Notes"'));
context.window.renderAqaTest3Quiz();
assert.equal((quizRoot.innerHTML.match(/type="radio"/g) || []).length, 92);
assert.equal((quizRoot.innerHTML.match(/role="status" aria-live="polite" hidden/g) || []).length, 23);
assert(!quizRoot.innerHTML.includes('答案 C'), 'Answers must not be rendered before selection');
assert(feedback.every(el => el.hidden));
events.change({ target: new FakeInput(0, 0) });
assert.equal(feedback[0].hidden, false);
assert.equal(feedback[0].dataset.correct, 'false');
assert(feedback[0].innerHTML.includes('答案 C'));
assert(feedback.slice(1).every(el => el.hidden), 'Answering one question must not expose others');
assert.equal(progress.textContent, '已答 1 / 23 · 答对 0 / 23');
events.change({ target: new FakeInput(0, 2) });
assert.equal(progress.textContent, '已答 1 / 23 · 答对 1 / 23');
questions.forEach((q, i) => events.change({ target: new FakeInput(i, q.answer) }));
assert.equal(progress.textContent, '已答 23 / 23 · 答对 23 / 23');
pageEvents.pageshow();
assert.equal(progress.textContent, '已答 0 / 23 · 答对 0 / 23');
assert(feedback.every(el => el.hidden && el.textContent === ''));
assert.equal(resets, 2);
console.log(`PASS: 23 distinct starred terms, 92 options, balanced keys ${answerCounts.join('/')}, reveal on choice only, correct scoring, pageshow clears all responses.`);
