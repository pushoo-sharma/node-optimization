// Import the 'fs' (file system) and 'crypto' modules
const fs = require('fs');
const crypto = require('crypto');

// Set the UV_THREADPOOL_SIZE to 2 to limit the number of threads in the thread pool
process.env.UV_THREADPOOL_SIZE = 2;

// Get the current timestamp
const start = Date.now();

// Log a message indicating the start of the script and the time difference
console.log('Hello from Top Level - Start', start - Date.now());

// Set a timeout for the callback function to be executed after 0 milliseconds
setTimeout(() => console.log('Hello from Timer 1', start - Date.now()), 0);

// Set an immediate callback function to be executed in the next iteration of the event loop
setImmediate(() => console.log('Hello from Immediate 1', start - Date.now()));

// Read the content of a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  // Handle any potential errors during file reading
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Log the file content and the time difference
  console.log('File Content Complete:', start - Date.now());

  // Perform password hashing asynchronously using crypto.pbkdf2
  crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}`, 'password 1 Done');
  });

  crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}`, 'password 2 Done');
  });

  crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}`, 'password 3 Done');
  });

  crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}`, 'password 4 Done');
  });
});

// Log a message to indicate execution from the top level of the script
console.log('Hello from Top Level - End', start - Date.now());
