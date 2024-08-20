// 1-stdin.js

process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set encoding to automatically convert input to a string
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
