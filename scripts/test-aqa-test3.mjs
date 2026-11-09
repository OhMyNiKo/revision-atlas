import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const source = readFileSync(new URL('language-sources/Niko_Instructional_Text_Revision_Table.md', root), 'utf8');
const notes = source.slice(source.indexOf('## 一、'))
  .replace(/\*\*(?:EN:|中文：)\*\*/g, '')
  .replaceAll('解释（英文解释＋中文通俗解释）', '解释')
  .replaceAll('例子（英文例子＋中文翻译）', '例子');
const expected = execFileSync('pandoc', ['-f', 'gfm', '-t', 'html5', '--wrap=none'], { input: notes.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'), encoding: 'utf8' });
const context = { window: {} };
vm.runInNewContext(readFileSync(new URL('aqa-test3-notes.js', root), 'utf8'), context);
const actual = context.window.AQA_TEST3_HTML;
const text = html => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const bodyStart = actual.search(/<h3[^>]*>一、/);
assert(bodyStart >= 0);
assert.equal(text(actual.slice(bodyStart)), text(expected), 'All knowledge, examples, analysis and sources must remain unchanged except labels');
assert(!actual.includes('EN:') && !actual.includes('中文'), 'Repeated language labels must be absent');
assert(!actual.includes('Niko · Instructional Text') && !actual.includes('Level 5是整体答卷'), 'Old introduction must be absent');
assert(actual.includes('本次考试题型') && actual.includes('MCQ') && actual.includes('共20分') && actual.includes('5题，共10分') && actual.includes('GAMP'));
assert(!actual.includes('**'), 'No raw Markdown emphasis delimiters should appear');
assert.equal((actual.match(/class="aqa-test3-row"/g) || []).length, 33);
assert.equal((actual.match(/class="syllabus-wording"><strong>★/g) || []).length, 23);
assert.equal((actual.match(/<table>/g) || []).length, 2);
assert.equal((actual.match(/<th scope="col">/g) || []).length, 10);
const page = readFileSync(new URL('index.html', root), 'utf8');
const languageNav = [...page.matchAll(/class="chapter-link"[^>]*data-subject="aqa"[^>]*data-section="([^"]+)"/g)];
assert.equal(languageNav.at(-1)[1], 'section-aqa-test-3');
assert(page.indexOf('id="section-aqa-test-3"') > page.indexOf('id="aqa-sources"'));
assert(page.includes(".syllabus-card, .step-note, .aqa-test3-row"));
assert(page.includes('.aqa-reference-table.aqa-test3-table table { width: 100%; min-width: 0; max-width: 100%; table-layout: fixed; }'), 'All five columns must fit the available width without a forced minimum');
console.log('PASS: 33 searchable rows, 23 stars, unchanged note content/order, no language labels, concise teacher exam overview, Test 3 last.');
