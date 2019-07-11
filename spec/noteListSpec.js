function testNoteListHasAnEmptyArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.myNotes.length === 0, "testNoteListHasAnEmptyArray");
};

testNoteListHasAnEmptyArray();

function testReturnAllNotes() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnAllNotes() === noteList.myNotes, "TEST: Return method returns the array");
};

testReturnAllNotes();
