let student = ["Somphors", "Almon", "Jake", "Niron", "Theara"];

// Here '^' control symbol used only in one role: Matching beginning of an input.

let regex = student.filter(student => /^A/.test(student));
console.log(regex);