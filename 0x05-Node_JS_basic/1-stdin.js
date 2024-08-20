// 1-stdin.js

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for the user's input
process.stdin.on('data', (data) => {
  // Convert the input buffer to a string and trim any extra whitespace
  const name = data.toString().trim();
  
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Close the input stream to end the program
  process.stdin.end();
});

// Listen for the 'end' event to display the closing message
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
