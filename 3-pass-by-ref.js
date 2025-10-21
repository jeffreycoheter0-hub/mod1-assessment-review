const student = require('./2-objects-nested-objects')

const copy = student; // not the object but the ref
copy.name = 'Jordan';

console.log(student.name); 
