(function () {

var names = ["Divij", "Jeel", "Jenish", "Hit", "Gruhil", "Jatin", "Divyesh", "Joly", "Millie", "Dishant", "Jayesh"];

for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'J') {
    byeSpeaker.bye(names[i]);
  } else {
    helloSpeaker.hello(names[i]);
  }
}
}) ();