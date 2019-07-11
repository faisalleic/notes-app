function testListView() {
  var noteList = new NoteList();
  var listView = new NoteListView(noteList);
  assert.isTrue(listView.viewList === noteList, "test: NoteListView is instantiated with a noteList");
};
testListView();
