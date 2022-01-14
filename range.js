const word = 'The Caterpillar and Alice looked at each other'; 
const regexpWithoutE = /\b[a-df-z]+\b/ig; //withouth E
console.log(word.match(regexpWithoutE)); 