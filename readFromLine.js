// First, need to import the readline 
const readline = require('readline');

// Createing an instance of the readline interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // for taking input from user

  rl.question('Please Enter Your Name : ', (name) => {

    console.log(`Hello ${name}`);
  
   // Close the readline interface
    rl.close();
  });