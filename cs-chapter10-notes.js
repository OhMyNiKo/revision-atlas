(() => {
  const root = document.getElementById('csChapter10Notes');
  if (!root) return;

  const syllabusUrl = 'https://www.cambridgeinternational.org/Images/721397-2027-2029-syllabus.pdf#page=28';
  const guideUrl = 'https://www.cambridgeinternational.org/Images/697401-2026-pseudocode-guide-for-teachers.pdf';
  const specimenUrl = 'https://www.cambridgeinternational.org/Images/751339-2021-specimen-mark-scheme-paper-2.pdf';

  const escapeHtml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

  const code = (value) => `<div class="code-block">${escapeHtml(value.trim())}</div>`;
  const points = (items, mark = '1') => `<ul class="mark-points">${items.map((item) => `<li data-mark="${mark}">${item}</li>`).join('')}</ul>`;
  const block = (label, title, content) => `<div class="answer-block"><div class="answer-block__title"><span>${label}</span>${title}</div>${content}</div>`;
  const table = (headers, rows) => `
    <div class="mini-table-wrap">
      <table>
        <thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`;
  const source = (extra = '') => `
    <div class="source-line">
      <span>Scope and syntax checked against</span>
      <a href="${syllabusUrl}" target="_blank" rel="noreferrer">Official syllabus · Chapter 10</a>
      <a href="${guideUrl}" target="_blank" rel="noreferrer">Official pseudocode guide</a>
      ${extra}
    </div>`;
  const card = ({ id, codeId, wording, guidance = [], label = 'Mark-ready answer', labelNote = 'One separately learnable point per bullet', body }) => `
    <article class="syllabus-card" id="${id}">
      <button class="card-toggle" type="button" aria-expanded="false" aria-controls="answer-${id}">
        <span class="point-id">${codeId}</span>
        <span>
          <span class="syllabus-wording">${wording}</span>
          ${guidance.length ? `<span class="guidance">${guidance.map((item) => `<span>${item}</span>`).join('')}</span>` : ''}
        </span>
        <span class="expand-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m6 9 6 6 6-6"/></svg></span>
      </button>
      <div class="answer" id="answer-${id}"><div class="answer__clip"><div class="answer__inner">
        <div class="answer-label"><span>${label}</span><span class="answer-label__note">${labelNote}</span></div>
        ${body}
      </div></div></div>
    </article>`;
  const section = ({ id, number, title, cards }) => `
    <section class="section" id="${id}" aria-labelledby="heading-${id}">
      <div class="section-heading">
        <div class="section-number">${number}</div>
        <div><span class="section-kicker">Candidates should be able to</span><h2 id="heading-${id}">${title}</h2></div>
      </div>
      <div class="cards">${cards.join('')}</div>
    </section>`;

  const dataTypes = card({
    id: 'select-data-types',
    codeId: '10.1.A',
    wording: 'Select and use appropriate data types for a problem solution',
    guidance: ['including integer, real, char, string, Boolean, date (pseudocode will use the following data types: INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE, ARRAY, FILE)'],
    body: `
      ${block('Selection rule', 'Match the type to every value the variable must hold', points([
        '<strong>INTEGER</strong>: a whole number, including negative values; use it for counts, indexes and IDs only when arithmetic is required.',
        '<strong>REAL</strong>: a value that may contain a fractional part, such as a measurement or average.',
        '<strong>CHAR</strong>: exactly one character; pseudocode character literals use single quotation marks, for example <code>\'A\'</code>.',
        '<strong>STRING</strong>: zero or more characters; use it for names, text and identifiers with leading zeroes.',
        '<strong>BOOLEAN</strong>: one of <code>TRUE</code> or <code>FALSE</code>; use it for a state, flag or two-way condition.',
        '<strong>DATE</strong>: a calendar date whose components can be processed with date functions supplied in the question.',
        '<strong>ARRAY</strong>: a fixed-length indexed collection whose elements share one data type.',
        '<strong>FILE</strong>: persistent data held outside the running program; AS file questions use text files consisting of lines.'
      ]))}
      ${table(
        ['Requirement', 'Best type', 'Reason'],
        [
          ['Number of students', '<code>INTEGER</code>', 'A count is a whole number and is used in arithmetic.'],
          ['Temperature 18.75 °C', '<code>REAL</code>', 'A fractional value may be required.'],
          ['Form group A', '<code>CHAR</code>', 'Exactly one character.'],
          ['Student ID 004812', '<code>STRING</code>', 'Leading zeroes matter and arithmetic is not required.'],
          ['Has paid?', '<code>BOOLEAN</code>', 'Only two logical states are needed.']
        ]
      )}
      <div class="exam-note"><strong>Exam trap:</strong> choose the type from the data's meaning, not its appearance. A telephone number or ID should normally be a <strong>STRING</strong> because it is not calculated and may contain leading zeroes.</div>
      ${source()}`
  });

  const records = card({
    id: 'record-structures',
    codeId: '10.1.B',
    wording: 'Show understanding of the purpose of a record structure to hold a set of data of different data types under one identifier',
    guidance: ['Write pseudocode to define a record structure', 'Write pseudocode to read data from a record structure and save data to a record structure'],
    label: 'Definition + exact syntax',
    labelNote: 'Record questions often award one mark for each structural feature',
    body: `
      ${block('Purpose', 'Why a record is used', points([
        'A record groups <strong>related fields about one entity</strong> under a single identifier.',
        'The fields may have <strong>different data types</strong>, unlike the elements of one array.',
        'An <strong>array of records</strong> stores many entities while keeping each entity\'s related values together.'
      ]))}
      ${block('Define', 'Declare a user-defined record type', code(`
TYPE Student
    DECLARE StudentID : STRING
    DECLARE Email : STRING
    DECLARE YearGroup : INTEGER
    DECLARE Active : BOOLEAN
ENDTYPE`))}
      ${block('Declare', 'Create one record and an array of records', code(`
DECLARE Pupil : Student
DECLARE Form : ARRAY[1:30] OF Student`))}
      ${block('Save / read', 'Use dot notation to access a field', code(`
Pupil.StudentID ← "004812"
Pupil.Email ← "niko@example.com"
Pupil.YearGroup ← 12
Pupil.Active ← TRUE

OUTPUT Pupil.StudentID

FOR Index ← 1 TO 30
    Form[Index].YearGroup ← Form[Index].YearGroup + 1
NEXT Index`))}
      ${block('Mark scheme checklist', 'A complete record answer normally needs', points([
        '<code>TYPE</code> followed by a suitable <strong>type identifier</strong>.',
        'Every field written as <code>DECLARE field : data type</code> with the <strong>correct type</strong>.',
        'A closing <code>ENDTYPE</code>.',
        'A variable declaration using the new type, for example <code>DECLARE Book : LibraryBookRecord</code>.',
        'Correct <strong>dot notation</strong>, for example <code>Book.Title ← "Dune"</code>.'
      ]))}
      <div class="exam-note"><strong>Exam trap:</strong> do not invent an enumerated type in an AS answer unless the question defines it. For a two-state field such as fiction / non-fiction, a <strong>BOOLEAN</strong> is usually the safe AS choice.</div>
      ${source(`<a href="${specimenUrl}" target="_blank" rel="noreferrer">Official specimen MS · Paper 2</a>`)}`
  });

  const arrayTerms = card({
    id: 'array-terms',
    codeId: '10.2.A',
    wording: 'Use the technical terms associated with arrays',
    guidance: ['Including index, upper and lower bound'],
    body: `
      ${block('Definition', 'What an array is', points([
        'An array is a <strong>fixed-length, ordered collection</strong> of elements stored under one identifier.',
        'All elements in one array have the <strong>same data type</strong>.',
        'An element is accessed by an integer <strong>index / subscript</strong>.'
      ]))}
      ${table(
        ['Term', 'Mark-ready meaning'],
        [
          ['Index / subscript', 'The integer position used inside square brackets to select an element.'],
          ['Lower bound', 'The smallest valid index.'],
          ['Upper bound', 'The largest valid index.'],
          ['Array length', '<code>upper bound - lower bound + 1</code>; both bounds are inclusive.'],
          ['Element', 'One stored value, for example <code>Names[4]</code>.']
        ]
      )}
      <div class="exam-note"><strong>Exam trap:</strong> <code>ARRAY[0:9]</code> contains <strong>10</strong> elements, not 9. Never use an index outside the declared lower and upper bounds.</div>
      ${source()}`
  });

  const chooseArray = card({
    id: 'choose-array-dimensions',
    codeId: '10.2.B',
    wording: 'Select a suitable data structure (1D or 2D array) to use for a given task',
    body: `
      ${table(
        ['Choose', 'When it fits', 'Example'],
        [
          ['<strong>1D array</strong>', 'One index identifies each item in a single list.', '<code>Mark[1:30]</code> for the marks of 30 students.'],
          ['<strong>2D array</strong>', 'Two indexes are naturally needed, usually row and column.', '<code>Board[1:6,1:7]</code> for a Connect Four grid.'],
          ['<strong>Array of records</strong>', 'Many entities each have several related fields of different types.', '<code>Membership[1:3000]</code> where each element is a <code>Student</code> record.'],
          ['<strong>Parallel arrays</strong>', 'Two arrays share indexes, although a record array is often safer.', '<code>ErrCode[i]</code> and <code>ErrText[i]</code> describe the same error.']
        ]
      )}
      ${block('Justification', 'Tie the structure to the scenario', points([
        'State the <strong>number of indexes</strong> needed and what each index represents.',
        'State that all stored elements share the <strong>same data type</strong>.',
        'For a 2D grid, name the dimensions, for example <strong>row and column</strong>.',
        'If related values have different types, justify an <strong>array of records</strong> instead of separate arrays.'
      ]))}
      <div class="exam-note"><strong>Exam precision:</strong> “a 2D array stores more data” earns little. Say that the task needs <strong>two coordinates</strong>, such as row and column, to locate one value.</div>
      ${source()}`
  });

  const declareArrays = card({
    id: 'array-pseudocode',
    codeId: '10.2.C',
    wording: 'Write pseudocode for 1D and 2D arrays',
    label: 'Exact declaration and access syntax',
    labelNote: 'Use square brackets and explicit inclusive bounds',
    body: `
      ${block('1D declaration', 'One index', code(`
DECLARE StudentNames : ARRAY[1:30] OF STRING
StudentNames[1] ← "Ali"`))}
      ${block('2D declaration', 'Two indexes', code(`
DECLARE Board : ARRAY[1:6,1:7] OF CHAR
Board[2,3] ← 'X'`))}
      ${block('Initialise 1D', 'Process every element with one loop', code(`
FOR Index ← 1 TO 30
    StudentNames[Index] ← ""
NEXT Index`))}
      ${block('Initialise 2D', 'Use nested loops and keep bounds with the correct dimension', code(`
FOR Row ← 1 TO 6
    FOR Column ← 1 TO 7
        Board[Row, Column] ← '-'
    NEXT Column
NEXT Row`))}
      ${block('Common examination forms', 'What Cambridge may ask you to do', points([
        'Complete a declaration by supplying the <strong>identifier, bounds and element type</strong>.',
        'Populate or output every element using the correct loop bounds.',
        'Search a 2D array for a reference and then update a value in the matching row.',
        'Trace a nested loop and identify the exact element accessed.',
        'Declare an <strong>array of a user-defined record type</strong>.'
      ]))}
      <div class="exam-note"><strong>Exam trap:</strong> Cambridge pseudocode does not use a range assignment such as <code>Names[1 TO 30] ← ""</code>. Assign each element inside a loop.</div>
      ${source()}`
  });

  const arrayAlgorithms = card({
    id: 'array-processing-algorithms',
    codeId: '10.2.D',
    wording: 'Write pseudocode to process array data',
    guidance: ['Sort using a bubble sort', 'Search using a linear search'],
    label: 'Core algorithms to write from memory',
    labelNote: 'These are pseudocode-writing requirements at AS Level',
    body: `
      ${block('Linear search', 'Check elements sequentially until found or out of data', points([
        'Start at the <strong>lower bound</strong>.',
        'Compare the search item with the element at the current index.',
        'Stop when a match is found or the index passes the <strong>upper bound</strong>.',
        'Return / output the index when found and a clear sentinel such as <code>-1</code> when not found.'
      ]) + code(`
FUNCTION LinearSearch(SearchItem : STRING) RETURNS INTEGER
    DECLARE Index : INTEGER
    DECLARE Found : BOOLEAN

    Index ← 1
    Found ← FALSE

    WHILE Index <= 30 AND Found = FALSE
        IF StudentNames[Index] = SearchItem THEN
            Found ← TRUE
        ELSE
            Index ← Index + 1
        ENDIF
    ENDWHILE

    IF Found = TRUE THEN
        RETURN Index
    ELSE
        RETURN -1
    ENDIF
ENDFUNCTION`))}
      ${block('Efficient bubble sort', 'Adjacent comparison, complete swap, shrinking boundary and early exit', points([
        'Compare each pair of <strong>adjacent elements</strong>.',
        'If they are in the wrong order, use a temporary variable to perform a <strong>three-step swap</strong>.',
        'After each pass, the largest remaining value is fixed at the end, so <strong>reduce the boundary</strong>.',
        'Reset a Boolean flag before each pass and stop when a complete pass makes <strong>no swaps</strong>.'
      ]) + code(`
PROCEDURE BubbleSort()
    DECLARE Index, Last : INTEGER
    DECLARE Temp : INTEGER
    DECLARE NoSwaps : BOOLEAN

    Last ← 30
    REPEAT
        NoSwaps ← TRUE
        FOR Index ← 1 TO Last - 1
            IF Numbers[Index] > Numbers[Index + 1] THEN
                Temp ← Numbers[Index]
                Numbers[Index] ← Numbers[Index + 1]
                Numbers[Index + 1] ← Temp
                NoSwaps ← FALSE
            ENDIF
        NEXT Index
        Last ← Last - 1
    UNTIL NoSwaps = TRUE OR Last = 1
ENDPROCEDURE`))}
      ${block('Linked values', 'Keep associated data together while sorting', points([
        'If the question uses parallel arrays, swap the corresponding elements in <strong>both arrays</strong> inside the same selection statement.',
        'If an array of records is used, swap the <strong>entire record</strong>, not only the key field.',
        'If a string contains a key followed by other data, compare the required substring but still swap the <strong>complete string element</strong>.'
      ]))}
      ${table(
        ['Likely question', 'What earns the marks'],
        [
          ['Write / complete a linear search', 'Initialise index and flag; bounded loop; compare current element; update index; return found / not found result.'],
          ['Write an efficient bubble sort', 'Outer working loop; inner adjacent loop; correct comparison; three-step swap; swap flag; shrinking boundary.'],
          ['Trace the algorithm', 'Show every changed element, flag, index and boundary in the order they change.'],
          ['Find repeated sorted keys', 'Compare each key with the previous key, output only repeats, and maintain a count.']
        ]
      )}
      <div class="exam-note"><strong>High-risk mistakes:</strong> comparing the wrong fields, overwriting a value without a temporary variable, using <code>Index + 1</code> beyond the upper bound, failing to reset <code>NoSwaps</code>, or swapping only one of two linked arrays.</div>
      ${source(`<a href="${specimenUrl}" target="_blank" rel="noreferrer">Official specimen MS · Paper 2</a>`)}`
  });

  const whyFiles = card({
    id: 'why-files',
    codeId: '10.3.A',
    wording: 'Show understanding of why files are needed',
    body: `
      ${block('Need', 'Why variables in memory are not enough', points([
        'A file provides <strong>persistent / permanent storage</strong> so data remains after the program finishes or the computer is switched off.',
        'A later run of the program can <strong>retrieve and update</strong> previously saved data.',
        'Files can hold more data than is practical to enter again and allow data to be <strong>shared or transferred</strong> between programs or users.'
      ]))}
      ${block('AS scope', 'What a text file contains', points([
        'A text file consists of <strong>one or more lines</strong>.',
        'Each line is read into or written from a <strong>STRING</strong> variable.',
        'Lines are processed sequentially from the current file position.'
      ]))}
      <div class="exam-note"><strong>Exam precision:</strong> “stores data” is too weak. State that the data remains available <strong>between program executions</strong>.</div>
      ${source()}`
  });

  const filePseudocode = card({
    id: 'text-file-pseudocode',
    codeId: '10.3.B',
    wording: 'Write pseudocode to handle text files that consist of one or more lines',
    label: 'Exact Cambridge file syntax',
    labelNote: 'Open in one mode, process, then close',
    body: `
      ${table(
        ['Mode', 'Effect'],
        [
          ['<code>READ</code>', 'Read existing lines.'],
          ['<code>WRITE</code>', 'Create / overwrite a file; existing contents are lost.'],
          ['<code>APPEND</code>', 'Add new lines after existing contents without deleting them.']
        ]
      )}
      ${block('Core commands', 'Syntax to reproduce exactly', code(`
OPENFILE FileName FOR READ
READFILE FileName, Line
EOF(FileName)
CLOSEFILE FileName

OPENFILE FileName FOR WRITE
WRITEFILE FileName, Line
CLOSEFILE FileName

OPENFILE FileName FOR APPEND
WRITEFILE FileName, Line
CLOSEFILE FileName`))}
      ${block('Complete pattern', 'Read every line and write a transformed copy', code(`
PROCEDURE MakeNewFile()
    DECLARE OldLine, NewLine : STRING

    OPENFILE "EmailDetails.txt" FOR READ
    OPENFILE "NewEmailDetails.txt" FOR WRITE

    WHILE NOT EOF("EmailDetails.txt")
        READFILE "EmailDetails.txt", OldLine
        NewLine ← "00" & OldLine
        WRITEFILE "NewEmailDetails.txt", NewLine
    ENDWHILE

    CLOSEFILE "EmailDetails.txt"
    CLOSEFILE "NewEmailDetails.txt"
ENDPROCEDURE`))}
      ${block('How it is examined', 'Recurring mark-scheme points', points([
        'Declare suitable <strong>STRING</strong> variables for each line.',
        'Open the correct file in the correct mode before processing.',
        'Use a conditional loop with <code>NOT EOF(...)</code> when the number of lines is unknown.',
        'Place <code>READFILE</code> and the processing logic <strong>inside the loop</strong>.',
        'Write to the correct destination and close <strong>every opened file</strong>.',
        'Combine file handling with a function, counter or early-stop condition, for example stop after 10 non-blank lines or too many errors.'
      ]))}
      <div class="exam-note"><strong>High-risk mistakes:</strong> using <code>WRITE</code> when existing data must be preserved, testing EOF after an invalid extra read, omitting a file name in <code>READFILE</code> / <code>WRITEFILE</code>, or forgetting <code>CLOSEFILE</code>.</div>
      ${source()}`
  });

  const adtMeaning = card({
    id: 'adt-meaning',
    codeId: '10.4.A',
    wording: 'Show understanding that an ADT is a collection of data and a set of operations on those data',
    body: `
      ${block('Definition', 'Abstract Data Type', points([
        'An ADT specifies a <strong>collection of data</strong> together with the permitted <strong>operations</strong> on that data.',
        'It describes the observable behaviour independently of the <strong>implementation details</strong>.',
        'Typical operations store, retrieve, inspect, add, edit or delete data.'
      ]))}
      ${block('Examples', 'AS Level ADTs', points([
        '<strong>Stack</strong>: push and pop at one end.',
        '<strong>Queue</strong>: enqueue at the rear and dequeue at the front.',
        '<strong>Linked list</strong>: nodes connected by pointers and accessed from a start pointer.'
      ]))}
      <div class="exam-note"><strong>Exam precision:</strong> an ADT describes <em>what</em> the data structure does. An array implementation describes <em>how</em> it is stored.</div>
      ${source()}`
  });

  const adtFeatures = card({
    id: 'adt-features-uses',
    codeId: '10.4.B',
    wording: 'Show understanding that a stack, queue and linked list are examples of ADTs',
    guidance: ['Describe the key features of a stack, queue and linked list and justify their use for a given situation'],
    label: 'Features + justified use',
    labelNote: 'Name the ordering rule and connect it to the scenario',
    body: `
      ${table(
        ['ADT', 'Key features', 'Use when'],
        [
          ['<strong>Stack</strong>', '<strong>LIFO</strong>. PUSH adds at the top; POP removes the most recently added item. A top / stack pointer identifies the current top.', 'The newest item must be processed first, such as undo history, nested calls or reversing an order.'],
          ['<strong>Queue</strong>', '<strong>FIFO</strong>. ENQUEUE adds at the rear; DEQUEUE removes the oldest item from the front. Front and rear pointers define the queue.', 'Items must be processed in arrival order, such as print jobs, requests or keyboard input.'],
          ['<strong>Linked list</strong>', 'Each <strong>node</strong> holds data and a pointer to the next node. A start pointer finds the first node and the last node contains a null pointer.', 'The order changes often and insertions / deletions should adjust pointers instead of shifting many data items.']
        ]
      )}
      ${block('Linked list trade-off', 'Why it may or may not be preferable to an array', points([
        '<strong>Benefit:</strong> insert or delete a node by changing pointers; the remaining data does not have to move.',
        '<strong>Benefit:</strong> nodes do not need to occupy consecutive array positions.',
        '<strong>Drawback:</strong> every node needs extra storage for a pointer.',
        '<strong>Drawback:</strong> setup and pointer manipulation are more complex.',
        '<strong>Drawback:</strong> access is sequential from the start pointer; there is no direct logical position such as <code>List[25]</code>.'
      ]))}
      <div class="exam-note"><strong>Reliable justification:</strong> do not only name the ADT. Link its ordering rule to the task, for example “a queue is suitable because the first request received must be the first processed.”</div>
      ${source()}`
  });

  const adtOperations = card({
    id: 'adt-operations',
    codeId: '10.4.C',
    wording: 'Use a stack, queue and linked list to store data',
    guidance: ['Candidates will not be required to write pseudocode for these structures, but they should be able to add, edit and delete data from these structures'],
    label: 'Operations to trace and explain',
    labelNote: 'AS boundary: understand operations; do not memorise full ADT pseudocode',
    body: `
      ${block('Stack', 'Trace PUSH and POP', points([
        '<strong>PUSH:</strong> first check the stack is not full, adjust the top pointer according to the convention given, then store the new item.',
        '<strong>POP:</strong> first check the stack is not empty, retrieve the top item, then adjust the top pointer.',
        '<strong>Overflow</strong> means attempting to PUSH to a full stack; <strong>underflow</strong> means attempting to POP an empty stack.'
      ]))}
      ${block('Circular queue', 'Trace ENQUEUE and DEQUEUE', points([
        '<strong>ENQUEUE:</strong> check the queue is not full, move / wrap the rear pointer as defined, store the item and increase the queue length.',
        '<strong>DEQUEUE:</strong> check the queue is not empty, retrieve the item at the front, move / wrap the front pointer and decrease the queue length.',
        'When a pointer reaches the upper bound, its next position wraps to the <strong>lower bound</strong>.',
        'A queue length / item count can distinguish <strong>empty from full</strong> when pointer positions alone are ambiguous.'
      ]))}
      ${block('Linked list', 'Adjust pointers without moving the remaining data', points([
        '<strong>Insert at start:</strong> new node points to the old first node; start pointer changes to the new node.',
        '<strong>Delete at start:</strong> start pointer takes the deleted node\'s next pointer.',
        '<strong>Insert between nodes:</strong> new node first takes the predecessor\'s old next pointer; predecessor then points to the new node.',
        '<strong>Delete between nodes:</strong> predecessor takes the deleted node\'s next pointer.',
        '<strong>Insert at end:</strong> old last node points to the new node; new node points to null.',
        '<strong>Delete at end:</strong> the predecessor\'s pointer becomes null.',
        '<strong>Edit:</strong> change the node\'s data field without altering its pointer unless its sorted position must change.'
      ]))}
      ${table(
        ['Likely AS question', 'Expected response'],
        [
          ['Complete a stack / queue diagram', 'Apply operations in order and show the final data plus every requested pointer.'],
          ['Describe adding / removing', 'State the error check, pointer change, data read / write and wrap-around if relevant.'],
          ['Complete a linked-list diagram', 'Preserve the required order, show the start pointer and finish with the correct null pointer.'],
          ['Describe traversal', 'Start at the start pointer, process the current node, follow its pointer, stop at null.']
        ]
      )}
      <div class="exam-note"><strong>Critical syllabus boundary:</strong> Cambridge states that AS candidates <strong>will not be required to write pseudocode</strong> for stack, queue or linked-list structures. Your class pseudocode is useful for understanding pointer behaviour, but the exam can instead ask you to trace, complete, describe or explain.</div>
      ${source()}`
  });

  const adtArrays = card({
    id: 'adt-array-implementation',
    codeId: '10.4.D',
    wording: 'Describe how a queue, stack and linked list can be implemented using arrays',
    label: 'Implementation model + pointer logic',
    labelNote: 'Descriptions and diagrams are examinable even when full pseudocode is not',
    body: `
      ${block('Stack array', 'One array and a top pointer', points([
        'Declare a 1D array whose size is the <strong>maximum stack capacity</strong>.',
        'Store each stack item in one element and use an integer <strong>top / stack pointer as the array index</strong> of the most recently added item.',
        'Initialise the pointer to represent an empty stack; compare it with the lower / upper bound to detect empty / full before POP / PUSH.'
      ]))}
      ${block('Circular queue array', 'One array, two pointers and a count', points([
        'Declare a 1D array with capacity at least as large as the required queue.',
        'Use integer <strong>front and rear pointers</strong> to locate the next item removed and the last / next item added, following the convention stated in the question.',
        'Wrap a pointer from the upper bound back to the lower bound so released locations can be reused.',
        'Maintain a <strong>queue length / number in queue</strong> to detect empty and full conditions.'
      ]))}
      ${block('Linked list arrays', 'Two parallel arrays or one array of records', points([
        'With parallel arrays, <code>Data[i]</code> and <code>Pointer[i]</code> together represent <strong>one node</strong>.',
        'Alternatively, define a record containing <strong>Data and Pointer fields</strong>, then declare one 1D array of that record type.',
        'A <strong>StartPointer</strong> stores the array index of the first logical node.',
        'Each Pointer field stores the <strong>array index of the next node</strong>; it does not store the data itself.',
        'A <strong>NullPointer</strong> uses a value outside the valid index range, such as 0 for an array indexed 1 to N or -1 for an array indexed 0 to N - 1.',
        'A <strong>FreeListPointer</strong> identifies the first unused node; unused nodes are linked together so a free location can be allocated and later returned.'
      ]) + code(`
TYPE Node
    DECLARE Data : STRING
    DECLARE Pointer : INTEGER
ENDTYPE

DECLARE List : ARRAY[1:200] OF Node
DECLARE StartPointer, FreeListPointer : INTEGER
CONSTANT NullPointer = 0`))}
      ${block('Free list actions', 'Understand the two pointer updates', code(`
// Allocate the first free node
NewPointer ← FreeListPointer
FreeListPointer ← List[NewPointer].Pointer

// Return a deleted node to the front of the free list
List[DeletedPointer].Pointer ← FreeListPointer
FreeListPointer ← DeletedPointer`))}
      ${block('Traversal model', 'How to access nodes in logical order', code(`
CurrentPointer ← StartPointer
WHILE CurrentPointer <> NullPointer
    OUTPUT List[CurrentPointer].Data
    CurrentPointer ← List[CurrentPointer].Pointer
ENDWHILE`))}
      <div class="exam-note"><strong>Exam trap:</strong> physical array order is not linked-list order. Begin at <code>StartPointer</code> and follow pointer values until <code>NullPointer</code>. Old data may remain in a deleted array element, but it is inaccessible once no live pointer leads to it.</div>
      ${source()}`
  });

  root.innerHTML = `
    <section class="chapter-hero chapter-hero--secondary" aria-labelledby="chapter-10-title">
      <div>
        <div class="eyebrow">9618 · Paper 2 data structures · class weeks 6–10</div>
        <h1 id="chapter-10-title">Data Types and Structures</h1>
        <p class="hero-copy">All classroom slides, solution slides, assessment tasks and linked-list notes have been mapped back to the official Chapter 10 syllabus. Definitions, mark points and pseudocode are separated so you can revise the exact form the exam may demand.</p>
        <div class="section-intro"><strong>Class-file map:</strong> Week 6 Lesson 2 → <strong>10.1</strong>; Week 7 Lessons 1–2 and Week 8 Lesson 3 → <strong>10.2</strong>; Week 9 Lesson 1 → <strong>10.3</strong>; Week 9 Lesson 3, Week 10 Lessons 1–3, both CA tasks and both linked-list handouts → <strong>10.4</strong>. Week 6 Lesson 1 belongs to <strong>12.3</strong> and is already consolidated in the existing Testing &amp; Maintenance notes.</div>
        <div class="instruction">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg>
          <span><strong>Write from memory:</strong> records, 1D / 2D arrays, linear search, efficient bubble sort and text-file handling. <strong>Trace / explain:</strong> stack, circular queue and linked-list operations. Cambridge explicitly says full ADT pseudocode is not required at AS.</span>
        </div>
      </div>
      <div class="chapter-stamp" aria-label="Chapter 10"><strong>10</strong><span>Chapter file</span></div>
    </section>
    ${section({ id: 'section-10-1', number: '10.1', title: 'Data Types and Records', cards: [dataTypes, records] })}
    ${section({ id: 'section-10-2', number: '10.2', title: 'Arrays', cards: [arrayTerms, chooseArray, declareArrays, arrayAlgorithms] })}
    ${section({ id: 'section-10-3', number: '10.3', title: 'Files', cards: [whyFiles, filePseudocode] })}
    ${section({ id: 'section-10-4', number: '10.4', title: 'Introduction to Abstract Data Types (ADT)', cards: [adtMeaning, adtFeatures, adtOperations, adtArrays] })}
  `;
})();
