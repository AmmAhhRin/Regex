const text = 'Today is a great day';

const lastWord = /\w+$/;
console.log(text.match(lastWord)); 


const Words = /\b\w+\b/g;
console.log(text.match(Words));


const wordQuality = /\w+(?= day)/;
console.log(text.match(wordQuality));
