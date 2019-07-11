(function(exports){

function NoteList() {
  this.myNotes = []
}

NoteList.prototype.returnAllNotes = function () {
  return this.myNotes;
};

NoteList.prototype.newNote = function (text) {
  this.myNotes.push(new Note(text));
};

  exports.NoteList = NoteList;
})(this);
