var singleLetterWord = /\b\w\b/g;
var notSoLongWord = /\b\w{1,4}\b/g;
var loooongWord = /\b\w{13,}\b/g;

var sentence = "Did you know that the water get hot when you boil it at high temperature";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord));    // [ "Why", "do", "I", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord));      // ["multiplication"]