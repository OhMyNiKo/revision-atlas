import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const read = file => readFileSync(new URL('../' + file, import.meta.url), 'utf8');
const index = read('index.html');
const script = read('owh-eos-notes.js');
const root = {};
vm.runInNewContext(script, { document: { getElementById: id => id === 'owhEosNotes' ? root : null } });
const html = root.innerHTML;
const keys = ['bandura', 'saavedra', 'fagen', 'perry', 'piliavin', 'milgram', 'dement'];
assert(!/truncated|undefined/.test(html));
assert.deepEqual([...index.matchAll(/data-subject="owh" data-section="owh-eos-([a-z]+)"/g)].map(m => m[1]), keys);
assert.equal([...index.matchAll(/data-subject="owh" data-section="section-owh-week/g)].length, 7);
assert.equal([...html.matchAll(/<article id="/g)].length, 21);
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
assert.equal(ids.length, new Set(ids).size);
const anchors = [
  /25\.8/, /ADIS-C\/P/, /89\.3%/, /39\.82%/, /62\/65/, /26\/40/, /152\/191/
];
keys.forEach((key, i) => {
  const base = 'owh-eos-' + key;
  const part = html.split('id="' + base + '"')[1].split('</section>')[0];
  for (const suffix of ['method', 'results', 'model']) {
    assert(ids.includes(base + '-' + suffix), base + '-' + suffix);
    assert(part.includes('href="#' + base + '-' + suffix + '"'));
  }
  assert.equal([...part.matchAll(/<p data-eos-tone=/g)].length, 4);
  assert.equal([...part.matchAll(/class="owh-eos-eval-table"/g)].length, 1);
  assert.match(part, anchors[i]);
});
assert(index.indexOf('src="owh-eos-notes.js') < index.indexOf('const moduleTargets'));
console.log('PASS: seven EOS studies, 21 sections, 28 model paragraphs, matching jump targets and original classroom navigation.');
