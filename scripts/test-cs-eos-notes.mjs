import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const read = file => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8');
function render(file, id) {
  const root = { innerHTML: '' };
  vm.runInNewContext(read(file), { document: { getElementById: key => key === id ? root : null } });
  return root.innerHTML;
}
const html = read('index.html');
const eos = render('cs-eos-notes.js', 'csEosNotes');
const chapter10 = render('cs-chapter10-notes.js', 'csChapter10Notes');
const combined = html + eos + chapter10;
const expected = ['1-1','1-2','1-3','2-1','3-1','3-2','9-1','9-2','10-1','10-2','10-3','10-4','11-1','11-2','11-3','12-1','12-2','12-3'];
assert.deepEqual([...html.matchAll(/data-subject="cs" data-section="section-([\d-]+)"/g)].map(match => match[1]), expected);
for (const suffix of expected) assert.equal(combined.split(`id="section-${suffix}"`).length - 1, 1, `module ${suffix} must exist once`);
const counts = [5, 7, 3, 15, 8, 6];
expected.slice(0, 6).forEach((suffix, i) => {
  const current = eos.slice(eos.indexOf(`id="section-${suffix}"`)).split('</section>')[0];
  assert.equal((current.match(/class="syllabus-card"/g) || []).length, counts[i]);
});
for (const match of eos.matchAll(/aria-expanded="false" aria-controls="(answer-cs-eos-[\d-]+)"/g)) {
  assert.equal(eos.split(`id="${match[1]}"`).length - 1, 1);
}
assert.equal((eos.match(/gate symbol"/g) || []).length, 6);
const extractTruthTable = id => eos.split(`id="answer-${id}"`)[1].split('</article>')[0];
const logicTrace = extractTruthTable('cs-eos-3-2-5');
const rows = [...logicTrace.matchAll(/<tr><td>([01])<\/td><td>([01])<\/td><td>([01])<\/td><td>([01])<\/td><td>([01])<\/td><td>([01])<\/td><\/tr>/g)].map(([,a,b,c,p,q,y]) => a+b+c+p+q+y);
assert.deepEqual(rows, ['000010','001000','010111','011100','100111','101100','110111','111100']);
assert.match(eos, /12\.3 不在 Test 1，3\.2 不在 Test 3/);
assert.match(chapter10, /edit an existing array-backed queue item/);
assert.match(html, /branch coverage<\/strong> is not the same as exhaustive path coverage/);
assert(html.indexOf('src="cs-eos-notes.js') < html.indexOf('const moduleTargets ='));
console.log('PASS: 18 EOS syllabus sections, 44 new exam cards, six gate symbols, complete and correct worked truth table.');
