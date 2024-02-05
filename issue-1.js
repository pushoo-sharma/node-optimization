// Require the 'fs' module for file system operations
const fs = require('fs');

// Set a timeout for the callback function to be executed after 0 milliseconds
setTimeout(() => console.log('Hello from Timer 1'), 0);

// Log a message to indicate execution from the top level of the script
console.log('Hello from Top Level');

// This script consists of asynchronous code using timers, but the following order will be followed:

// 1. The 'Hello from Top Level' message will be logged immediately as it is a synchronous operation.

// 2. The setTimeout function with a delay of 0 milliseconds schedules the callback function to be executed in the next tick of the event loop.

// 3. The event loop continues, and the callback function from setTimeout is executed, logging 'Hello from Timer 1'.

// Therefore, the output will be:
// Hello from Top Level
// Hello from Timer 1
