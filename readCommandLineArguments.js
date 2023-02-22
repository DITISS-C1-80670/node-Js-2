// First, we need to import the 'process' module
const process = require('process');

// We can use the 'process.argv' array to access the command line arguments
// The first two elements are always the path to the node and the file respectively
// The third element will be the first argument passed in the command line

const name = process.argv[2]; 

console.log(`Hello ${name}`);