function testNoteListHasAnEmptyArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0, "testNoteListHasAnEmptyArray");
};

testNoteListHasAnEmptyArray();

function testShowList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.showList() === noteList.list, "TEST: Return method returns the array");
};
testShowList();

function testCreateNote() {
  var noteList = new NoteList();
  var text = "WWE"
  noteList.createNote(text);
  assert.isTrue(noteList.list.length === 1, "TEST: Creates a new note and stores it in list");
};
testCreateNote();
