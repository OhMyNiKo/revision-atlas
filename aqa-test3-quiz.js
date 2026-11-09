// Original practice questions, not an official paper or a prediction of its wording.
// Each termIndex refers to exactly one of the 23 starred terms in the supplied notes.
window.AQA_TEST3_MCQ = [
  {
    termIndex: 10, term: 'Finite verb',
    sentence: 'The warning label <strong>has been printed</strong> on the underside of the tray.',
    prompt: 'Which word carries finiteness in the highlighted verb chain?',
    options: ['printed', 'been', 'has', 'printing'], answer: 2,
    feedback: ['printed 在此是过去分词，时态由前面的助动词承担。', 'been 是 be 的过去分词，在这条动词链中不承担限定作用。', 'has 是现在时限定助动词，与单数主语 label 对应；been 和 printed 都是分词。', 'printing 既没有出现在这条动词链中，也不是其限定动词。']
  },
  {
    termIndex: 3, term: 'Relative pronoun',
    sentence: 'Use the latch <strong>that</strong> holds the cartridge in place.',
    prompt: 'Using the terminology in your class notes, what is the most precise label for “that” here?',
    options: ['Subordinating conjunction', 'Relative pronoun', 'Demonstrative determiner', 'Personal pronoun'], answer: 1,
    feedback: ['这里 that 回指 latch，并在 holds the cartridge in place 中作主语；按课堂体系，应具体命名为 relative pronoun。', 'that 回指 latch，并作关系从句中 holds 的主语。注意：that 是代词，that holds the cartridge in place 才是整个关系从句。', '指示限定词通常放在名词前，如 that latch；这里 that 引出关系从句。', '这里不是 you、it 等人称代词，而是连接 latch 与其关系从句的关系代词。']
  },
  {
    termIndex: 17, term: 'Compound sentence',
    sentence: '', prompt: 'Which instruction-guide sentence is a compound sentence?',
    options: ['The printer stops when the cover is opened.', 'The printer checks the tray and the cartridge.', 'Before the test starts, the display turns blue.', 'The display lights up, and the printer begins a self-test.'], answer: 3,
    feedback: ['when 引出时间从句，因此这是主句加从句的 complex sentence。', 'and 只连接两个宾语 the tray 和 the cartridge，没有连接两个独立分句。', 'Before 引出从句，后面接主句，因此是 complex sentence。', 'The display lights up 和 the printer begins a self-test 都能独立成句，由 and 并列连接。']
  },
  {
    termIndex: 21, term: 'Adjective phrase',
    sentence: 'The cartridge must be <strong>completely dry</strong> before it is fitted.',
    prompt: 'What is the highlighted unit as a whole?',
    options: ['An adjective phrase headed by “dry”', 'An adverb phrase headed by “completely”', 'A noun phrase headed by “cartridge”', 'A verb phrase headed by “be”'], answer: 0,
    feedback: ['dry 是中心形容词，completely 修饰其程度；整个单位仍是 adjective phrase。它规定装入前必须完全干燥。', 'completely 是副词，但这里只是修饰 dry；不能用修饰语的词类代替整个短语的类别。', 'cartridge 不在所标出的 completely dry 内；这个短语的中心词是 dry。', 'be 不属于所标出的单位，completely dry 本身不是动词链。']
  },
  {
    termIndex: 5, term: 'Noun clause',
    sentence: 'Check <strong>whether the cartridge is seated correctly</strong>.',
    prompt: 'What is the grammatical function of the entire highlighted clause?',
    options: ['An adverbial clause giving the condition for checking', 'A relative clause modifying “cartridge”', 'A noun clause functioning as the object of “check”', 'A main clause giving a separate instruction'], answer: 2,
    feedback: ['它说明要检查的内容，不是“在什么条件下才检查”；whether 在这里表示“是否”。', '它没有后置修饰 cartridge，而是整体填入 check 的宾语位置。', '整个 whether 从句回答“check what?”，规定要确认的信息，所以是作宾语的 noun clause。', '这个 whether 从句依附于 check，并不是一条独立的主要指令。']
  },
  {
    termIndex: 1, term: 'Co-ordinating conjunction',
    sentence: 'Select plain paper <strong>or</strong> card for the alignment test.',
    prompt: 'Which description of “or” is accurate?',
    options: ['A co-ordinating conjunction linking alternative noun phrases', 'A subordinating conjunction introducing a dependent clause', 'An adverb modifying the manner of “select”', 'A relative pronoun referring back to “paper”'], answer: 0,
    feedback: ['or 并列连接 plain paper 和 card，给出两个材料选项；这里没有因此形成两个独立分句。', 'or 没有引出从句；两边是可供选择的名词短语。', 'or 表示二选一，不表示选择动作的方式。', 'or 不回指 paper，也不在关系从句中承担主语或宾语作用。']
  },
  {
    termIndex: 13, term: 'Passive voice',
    sentence: 'A technician must replace the filter.',
    prompt: 'Which version uses passive voice AND preserves the original requirement?',
    options: ['Technicians must replace the filter.', 'The filter may be replaced by a technician.', 'The filter must replace a technician.', 'The filter must be replaced by a technician.'], answer: 3,
    feedback: ['主语 Technicians 仍是动作执行者，因此仍为主动语态。', '虽然使用被动语态，但 may 把 must 的强制要求改成了许可／可能性。', 'filter 被写成 replace 的执行者，改变了原来的动作角色，也不是被动结构。', 'must be replaced 保留强制义务，并把承受更换动作的 filter 置于主语位置；by a technician 保留执行者。']
  },
  {
    termIndex: 4, term: 'Discourse markers',
    sentence: '<strong>First</strong>, load the tray. <strong>Next</strong>, run the test. <strong>Finally</strong>, save the result.',
    prompt: 'At discourse level, what is the main function of the highlighted expressions?',
    options: ['To identify the grammatical subjects of the actions', 'To mark the stages and sequence of the procedure', 'To express different degrees of obligation', 'To introduce clauses modifying named components'], answer: 1,
    feedback: ['它们不指称执行动作的人或物，而是在组织整个操作流程。', 'First、Next、Finally 是按顺序组织步骤的 discourse markers，帮助读者跟随进度。这里问的是语篇功能。', '指令力度通常由 must、should 等情态表达体现；这些词标示步骤先后。', '它们没有引出修饰部件名词的关系从句。']
  },
  {
    termIndex: 22, term: 'Noun phrase',
    sentence: 'Push <strong>the narrow plastic tray</strong> into the lower slot.',
    prompt: 'Which analysis of the highlighted unit is correct?',
    options: ['A noun phrase with “tray” as its head', 'An adjective phrase with “narrow” as its head', 'A prepositional phrase with “plastic” as its head', 'A verb phrase with “push” as its head'], answer: 0,
    feedback: ['中心名词是 tray，the 限定它，narrow 和 plastic 提供描述；整体是 push 的宾语名词短语。', '虽然有描述语，但整个单位指称 tray，不是以 narrow 为中心的形容词短语。', '这个单位不以介词开头，plastic 在这里也不是介词。', 'push 在所标出的单位之外；the narrow plastic tray 不包含动词中心。']
  },
  {
    termIndex: 9, term: 'Non-finite verb',
    sentence: '', prompt: 'In which option is the highlighted verb form non-finite?',
    options: ['The lamp <strong>flashes</strong> during start-up.', 'The technician <strong>checked</strong> the cable.', 'The tray <strong>is</strong> secure.', '<strong>To reduce</strong> the risk, switch off the unit.'], answer: 3,
    feedback: ['flashes 是现在时限定动词，随单数主语 lamp 使用。', 'checked 在这个完整分句中是过去时限定动词；不能仅看 -ed 就判断它是非限定形式。', 'is 是现在时限定动词，与 tray 构成完整分句。', 'to reduce 是不定式，本身不标示时态、人称或数；这个非限定结构说明关机的目的。']
  },
  {
    termIndex: 14, term: 'Concrete noun',
    sentence: 'Keep the <strong>cable</strong> away from the heated surface.',
    prompt: 'Which noun category best describes “cable” in this context?',
    options: ['Abstract noun', 'Concrete noun', 'Proper noun', 'Collective noun'], answer: 1,
    feedback: ['cable 指可以感知、拿取的实际物件，不是 safety 等抽象概念。', 'cable 指读者能看见并移动的实物，属于 concrete noun，使安全要求落实到具体对象。', 'cable 是物件类别的一般名称，并非某个专属名称。', '这里 cable 指一件线缆，不是 team、committee 等表示集合的名词。']
  },
  {
    termIndex: 2, term: 'Subordinating conjunction',
    sentence: '<strong>Unless</strong> the indicator is green, do not begin the test.',
    prompt: 'What is the most precise description of “unless” here?',
    options: ['A co-ordinating conjunction linking equal clauses', 'A relative pronoun referring to “indicator”', 'A subordinating conjunction introducing a condition', 'A discourse marker indicating the final stage'], answer: 2,
    feedback: ['unless 使其后分句依附于主句，不是把两个地位相同的分句并列连接。', 'unless 不回指 indicator，也不在从句中替代某个名词成分。', 'unless 引出条件从句，意思是“除非指示灯为绿色，否则不要开始”，限定测试何时可以进行。', '它规定执行条件，而不是像 finally 那样标记流程的最后一步。']
  },
  {
    termIndex: 8, term: 'Minor sentence / elliptical sentence',
    sentence: 'At the final checkpoint, the guide asks: <strong>Ready for the next step?</strong>',
    prompt: 'Which analysis best explains the highlighted wording?',
    options: ['A full declarative clause with an overt subject and finite verb', 'An imperative clause with an understood subject “you”', 'A compound sentence with two independent clauses', 'An elliptical question with “Are you” recoverable from context'], answer: 3,
    feedback: ['这里没有明说主语或限定动词；它也不是陈述句。', '这不是命令读者执行动作的祈使句；可还原为 Are you ready for the next step?。', '这里没有两个独立分句，更没有并列连接它们。', '可以补出 Are you，形成准备情况检查。这题具体考 ellipsis；minor sentence 和 elliptical sentence 可能重合，但并非完全同义。']
  },
  {
    termIndex: 15, term: 'Subject–verb–object (SVO)',
    sentence: 'The sensor detects movement.',
    prompt: 'Which analysis correctly identifies the clause pattern?',
    options: ['Subject: “The sensor”; verb: “detects”; direct object: “movement”', 'Subject: “The sensor”; verb: “detects”; subject complement: “movement”', 'Subject: “movement”; verb: “detects”; direct object: “The sensor”', 'Subject: “The sensor”; verb: “detects”; adverbial: “movement”'], answer: 0,
    feedback: ['The sensor 是主语，detects 是及物动词，movement 是被检测的内容，作直接宾语；因此结构为 SVO。', 'movement 不是给 sensor 重新命名或描述其状态的主语补语，而是 detects 的直接宾语。', '原句的主语是 The sensor，不能把句末的 movement 与它对调。', 'movement 回答“detects what?”，不是时间、地点或方式状语。']
  },
  {
    termIndex: 11, term: 'Modal verb',
    sentence: 'You <strong>may</strong> skip the alignment test if no lines appear blurred.',
    prompt: 'What does the modal verb “may” primarily express in this instruction?',
    options: ['A compulsory action for every user', 'A prediction that the test will be skipped', 'Permission to omit a step under a stated condition', 'An ability that the reader possessed in the past'], answer: 2,
    feedback: ['may 没有把跳过测试规定为强制动作；而且 if 从句限制了许可条件。', '这条指令在授权读者选择，不是在预测读者将会怎样做。', 'may 在此表示许可；只有没有模糊线条时，读者才获准跳过这一步。', '这里没有过去时间或过去能力的含义。']
  },
  {
    termIndex: 7, term: 'Relative clause',
    sentence: 'Attach the cable <strong>which is marked IN</strong> before you switch on the printer.',
    prompt: 'What is the most precise description of the ENTIRE highlighted unit?',
    options: ['An adverbial clause specifying when to attach the cable', 'A defining relative clause identifying the cable', 'A noun clause acting as the object of “attach”', 'A main clause giving a separate instruction'], answer: 1,
    feedback: ['表示时间的是 before you switch on the printer；所标单位用来限定是哪条 cable。', '整个 which is marked IN 修饰 cable，提供识别它的标签信息；which 单独才是 relative pronoun。', 'attach 的宾语名词短语是 the cable which is marked IN；所标关系从句在其中修饰 cable。', '该单位依附于 cable，不是一条独立指令。']
  },
  {
    termIndex: 19, term: 'Proper nouns',
    sentence: 'Open the printer settings in <strong>Windows</strong> before installing the driver.',
    prompt: 'How should “Windows” be classified in this context?',
    options: ['A proper noun naming a particular operating system', 'A common noun naming openings in a building', 'An adjective describing the printer settings', 'An adverb modifying the action of installing'], answer: 0,
    feedback: ['Windows 在这里是特定操作系统的名称，属于 proper noun；语境把指令定位到这一平台。', '这里指操作系统，不指建筑物的窗户；分类必须依据语境。', 'Windows 是平台名称，并没有作为形容词描述 settings。', '它没有修饰 installing 的方式、时间或程度，而是命名操作系统。']
  },
  {
    termIndex: 23, term: 'Prepositional phrase',
    sentence: 'Store the spare cartridge <strong>beneath the output tray</strong>.',
    prompt: 'What is the highlighted unit as a whole?',
    options: ['A noun phrase headed by “tray”', 'A finite subordinate clause with an omitted subject', 'A verb phrase headed by “store”', 'A prepositional phrase headed by “beneath”'], answer: 3,
    feedback: ['the output tray 是其中嵌入的名词短语，但所标整体还包含中心介词 beneath。', '这个单位没有限定动词，不是有限定动词的从句。', 'store 在所标单位之外，不能作为其中心词。', 'beneath 是介词，the output tray 是其补足成分；整体用参照物说明存放位置。']
  },
  {
    termIndex: 12, term: 'Active voice',
    sentence: '', prompt: 'Which clause uses active voice?',
    options: ['The rollers must be cleaned every month.', 'The rollers pull the paper into the printer.', 'The paper is fed through the lower slot.', 'The tray has been opened by the technician.'], answer: 1,
    feedback: ['must be cleaned 是被动结构，rollers 承受清洁动作。', '主语 The rollers 执行 pull 动作，因此为主动语态；主动语态的主语不必是人。', 'is fed 是被动结构，paper 承受输送动作。', 'has been opened 是被动结构，by the technician 明示执行者。']
  },
  {
    termIndex: 18, term: 'Evaluative adjectives',
    sentence: 'For a quick check, use the <strong>reliable</strong> calibration routine in the Settings menu.',
    prompt: 'Why is “reliable” an evaluative adjective here?',
    options: ['It identifies the routine through its visible colour.', 'It classifies the material from which the routine is made.', 'It expresses a judgement about the routine’s dependability.', 'It specifies the physical dimensions of the routine.'], answer: 2,
    feedback: ['reliable 没有描述可见颜色；它评价这套流程是否值得信赖。', '这个词不表示构成材料，而是在作可靠性的判断。', 'reliable 表达对可靠性的正面评价，可能增强读者采用该流程的信心；不能把这种作用泛化成所有形容词的固定效果。', '它不描述长度、大小等物理尺寸。']
  },
  {
    termIndex: 6, term: 'Subordinate clause',
    sentence: '<strong>Although the display is lit</strong>, wait until the self-test has finished.',
    prompt: 'Which structural analysis of the highlighted unit is correct?',
    options: ['A dependent clause introduced by a subordinating conjunction', 'An independent clause that can stand unchanged as a sentence', 'Two independent clauses joined by a co-ordinating conjunction', 'A noun phrase containing no finite verb'], answer: 0,
    feedback: ['Although 引出让步从句；the display is lit 有主语和限定动词，但加上 Although 后仍依附于主句。', '它不能原样作为这里的独立完整句；有主语和限定动词，并不等于一定是独立分句。', '这里所标的是一个从属分句，不是由并列连词连接的两个独立分句。', '它包含限定动词 is，且由 Although 引出从句，不是名词短语。']
  },
  {
    termIndex: 20, term: 'Verb phrase',
    sentence: 'The tray should have been emptied before collection.',
    prompt: 'Using the verb-chain convention in your notes, which option identifies the COMPLETE verb phrase?',
    options: ['The tray', 'should have been emptied', 'emptied before collection', 'before collection'], answer: 1,
    feedback: ['The tray 是主语名词短语，没有包含动词链。', 'should＋have＋been＋emptied 构成完整动词链，结合情态、完成体和被动语态；before collection 是其外的时间介词短语。', '这既漏掉助动词 should have been，又把时间短语 before collection 并入了动词链。', 'before collection 是时间介词短语，不是动词短语。']
  },
  {
    termIndex: 16, term: 'Complex sentence',
    sentence: '', prompt: 'Which instruction-guide sentence is a complex sentence?',
    options: ['The printer starts and checks the cartridge.', 'The printer is ready, and the green light is on.', 'The printer checks both the paper and the cartridge.', 'When the self-test ends, the printer displays READY.'], answer: 3,
    feedback: ['starts 和 checks 共用一个主语，构成并列谓语；没有从属分句。', '两个独立分句用 and 并列连接，这是 compound sentence。', 'both ... and ... 连接两个宾语，没有形成从句。', 'When the self-test ends 是时间从句，the printer displays READY 是主句；主句加从句构成 complex sentence。']
  }
];

window.renderAqaTest3Quiz = function (config = {}) {
  const root = document.getElementById(config.rootId || 'aqaTest3Quiz');
  if (!root) return;
  const questions = config.questions || window.AQA_TEST3_MCQ;
  const prefix = config.prefix || 'test3';
  const progressId = config.progressId || 'test3QuizProgress';
  const formId = config.formId || 'test3QuizForm';
  const total = questions.length;
  const progressText = (answered, correct) => `已答 ${answered} / ${total} · 答对 ${correct} / ${total}`;
  const letters = ['A', 'B', 'C', 'D'];
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  root.innerHTML = `
    <h3 id="${prefix}-mcq-heading">${escape(config.heading || '四、23-term MCQ Practice')}</h3>
    <p>${escape(config.intro || '23 道四选一，每题 1 分，恰好覆盖全部 23 个星号术语。以下是面向初次操作打印机的读者的说明文本片段；每题独立作答。自编覆盖练习，非官方试卷，题量不代表明天的正式题量。')}</p>
    <p>选择后显示该题答案与解析；刷新页面后全部清空。</p>
    <p class="aqa-quiz-progress" id="${progressId}" role="status" aria-live="polite">${progressText(0, 0)}</p>
    <form id="${formId}" autocomplete="off" aria-labelledby="${prefix}-mcq-heading">
      ${questions.map((q, i) => `
        <fieldset class="aqa-quiz-question" id="${prefix}-mcq-${i + 1}">
          <legend lang="en"><span class="aqa-quiz-number">${String(i + 1).padStart(2, '0')}</span> ${escape(q.prompt)}</legend>
          ${q.sentence ? `<p class="aqa-quiz-stimulus" lang="en">${q.sentence}</p>` : ''}
          <div class="aqa-quiz-options" lang="en">
            ${q.options.map((option, j) => `<label><input type="radio" name="${prefix}-question-${i + 1}" value="${j}" autocomplete="off"><span><span class="aqa-quiz-letter">${letters[j]}.</span> ${option}</span></label>`).join('')}
          </div>
          <div class="aqa-quiz-feedback" id="${prefix}-feedback-${i + 1}" role="status" aria-live="polite" hidden></div>
        </fieldset>`).join('')}
    </form>
    <p class="aqa-quiz-sources">命题依据：老师的 23 项清单与本页术语定义；易混语法核对：<a href="https://dictionary.cambridge.org/grammar/british-grammar/relative" target="_blank" rel="noreferrer">Cambridge · Relative pronouns</a>、<a href="https://dictionary.cambridge.org/us/grammar/british-grammar/clauses-finite-" target="_blank" rel="noreferrer">Finite / non-finite clauses</a>、<a href="https://dictionary.cambridge.org/us/grammar/british-grammar/conjunctions-subordinating" target="_blank" rel="noreferrer">Conjunctions</a>。</p>`;
  const form = root.querySelector('form');
  const responses = new Map();
  function resetResponses() {
    form.reset();
    responses.clear();
    root.querySelectorAll('.aqa-quiz-feedback').forEach(el => { el.hidden = true; el.textContent = ''; delete el.dataset.correct; });
    root.querySelector(`#${progressId}`).textContent = progressText(0, 0);
  }
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('change', event => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== 'radio') return;
    const i = Number(input.name.replace(`${prefix}-question-`, '')) - 1;
    const selected = Number(input.value);
    const q = questions[i];
    if (!q || !Number.isInteger(selected) || selected < 0 || selected > 3) return;
    responses.set(i, selected);
    const feedback = root.querySelector(`#${prefix}-feedback-${i + 1}`);
    feedback.hidden = false;
    feedback.dataset.correct = String(selected === q.answer);
    feedback.innerHTML = `<p><strong>${selected === q.answer ? '答对了' : '本次选择不正确'} · 答案 ${letters[q.answer]} · ${escape(q.term)}</strong></p><p>${escape(q.feedback[selected])}</p>${selected !== q.answer ? `<p>${escape(q.feedback[q.answer])}</p>` : ''}`;
    const correct = [...responses].filter(([index, value]) => questions[index].answer === value).length;
    root.querySelector(`#${progressId}`).textContent = progressText(responses.size, correct);
    window.dispatchEvent(new Event('resize'));
  });
  // No cookies, localStorage, sessionStorage or server writes. Also clear any
  // browser-restored form values on a fresh load or a back-forward cache restore.
  resetResponses();
  window.addEventListener('pageshow', resetResponses);
};
