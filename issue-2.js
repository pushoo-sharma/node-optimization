// Require the 'fs' module for file system operations
const fs = require('fs');

// Set a timeout for the callback function to be executed after 0 milliseconds
setTimeout(() => console.log('Hello from Timer 1'), 0);

// Set an immediate callback function to be executed in the next iteration of the event loop
setImmediate(() => console.log('Hello from Immediate 1'));

// Log a message to indicate execution from the top level of the script
console.log('Hello from Top Level');

// This script consists of asynchronous code using timers and setImmediate, but the following order will be followed:

// 1. The 'Hello from Top Level' message will be logged immediately as it is a synchronous operation.

// 2. The setTimeout function with a delay of 0 milliseconds schedules the callback function to be executed in the next tick of the event loop.

// 3. The setImmediate function schedules its callback function to be executed in the current iteration of the event loop after the synchronous code.

// Therefore, the output will likely be:
// Hello from Top Level
// Hello from Timer 1
// Hello from Immediate 1
