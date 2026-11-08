// Rendering and classification only: the imported note bodies are not rewritten.
function renderSTEPNotes() {
  const {modules, notes} = window.STEP_NOTES;
  const root = document.getElementById('stepNotes');
  const nav = document.querySelector('[data-subject-nav="step"]');
  const groups = {'Pure Mathematics':'纯数学 · Pure Mathematics', Mechanics:'力学 · Mechanics', Reference:'辅助索引 · Reference'};
  const extras = {X01:[3], X02:[3], X03:[1,2,3,4]};
  const link = note => `<a href="#${note.id}">${note.title}</a>`;
  let previousGroup = '';
  nav.innerHTML = modules.map(([code,title,group]) => {
    const heading = group !== previousGroup ? `<div class="step-nav-group">${groups[group]}</div>` : '';
    previousGroup = group;
    const count = notes.filter(n=>n.module===code).length;
    return `${heading}<a class="chapter-link" href="#section-step-${code.toLowerCase()}" data-subject="step" data-section="section-step-${code.toLowerCase()}"><span class="chapter-link__num">${code}</span><span class="chapter-link__text">${title}${count ? `<span class="step-nav-note-count">${count}</span>` : ''}</span></a>`;
  }).join('');
  previousGroup = '';
  root.innerHTML = modules.map(([code,title,group]) => {
    const heading = group !== previousGroup ? `<div class="step-group-heading">${groups[group]}</div>` : '';
    previousGroup = group;
    const entries = notes.filter(n=>n.module===code);
    const related = notes.filter(n=>n.module!==code && (n.tags.includes(code) || extras[code]?.includes(n.number)));
    return `${heading}<section class="step-module${entries.length ? '' : ' step-module--empty'}" id="section-step-${code.toLowerCase()}" aria-labelledby="heading-step-${code.toLowerCase()}">
      <header class="step-module__head"><span class="step-module__code">${code}</span><h2 id="heading-step-${code.toLowerCase()}">${title}</h2><span class="step-module__count">${entries.length ? `${entries.length} 节笔记` : related.length ? `${related.length} 条关联` : '待收录'}</span></header>
      ${entries.map(note=>`<article class="step-note" id="${note.id}" lang="zh-CN"><div class="step-note__meta"><span>${note.date} · 原笔记第 ${note.number} 节</span><span>${note.tags.join(' · ')}</span><a href="${note.source}" download>原始 .tex</a></div><div class="step-note__body">${note.html}</div></article>`).join('')}
      ${related.length ? `<div class="step-related"><span>相关笔记</span>${related.map(link).join('')}</div>` : ''}
    </section>`;
  }).join('');
  // Use the original source text for search, not KaTeX's duplicated HTML/MathML.
  notes.forEach(note=>{document.getElementById(note.id).dataset.searchText = `${note.title}\n${note.tags.join(' ')}\n${note.searchText}`;});
}
