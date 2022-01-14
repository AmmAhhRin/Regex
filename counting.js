var word = "I struggle with Javascript a lot.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", word.match(regexpVowels).length);