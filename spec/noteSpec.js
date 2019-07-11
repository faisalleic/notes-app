function testNotes() {
  var note = new Note("javascript");
  assert.isTrue(note.text === "javascript", "testing Note function works and is instantiated with text");
};

testNotes();

function testReturnNotes() {
  var returnNotes = new Note();
  assert.isTrue(returnNotes.returnNotes === returnNotes.text, "Test: returnNotes returns the text when instantiated");
};

testReturnNotes();
