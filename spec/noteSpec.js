function testNotes() {
  var note = new Note("javascript");
  assert.isTrue(note.text === "javascript", "testing Note function works and is instantiated with text");
};

testNotes();
