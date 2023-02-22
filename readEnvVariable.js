// First, we need to import the 'process' module
const process = require('process');

// We can use the 'process.env' object to access the environment variables
let name = process.env.USERNAME;


console.log(`Hello ${name}`);