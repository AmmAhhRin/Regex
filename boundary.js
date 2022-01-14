example = 'L really really want to know how to create my own website';

// 1) Use ^ to fix the matching at the begining of the string, and right after newline.
example = example.replace(/^L/gim,'I');
console.log(1, example);
