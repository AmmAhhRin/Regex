var num = "015 354 8787 687351 3512 8735";
var regexpFourDigits = /\b\d{4}\b/g;
// \b indicates a boundary *do not start matching in the middle of a word*
// \d{4} indicates a digit, four times
// \b indicates another boundary *do not end matching in the middle of a word*

console.table(num.match(regexpFourDigits));
// ['8787', '3512', '8735']