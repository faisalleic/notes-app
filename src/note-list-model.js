(function(exports){

function NoteList() {
  this.myNotes = []
}

NoteList.prototype.returnAllNotes = function () {
  return this.myNotes;
};

NoteList.prototype.newNote = function (text) {
  var note = new Note(text)
  this.myNotes.push(note);
};

  exports.NoteList = NoteList;
})(this);
