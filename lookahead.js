let regex = /at(?= KIT)/g;

console.log('at KIT'.match(regex)); 
console.log('around KIT'.match(regex)); 
console.log('The environment at KIT is beautiful.'.match(regex)); 
console.log('The environment around KIT campus is nice.'.match(regex)); 