const readline = require("readline");

// interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const w = parseInt(input);

  if (w >= 4 && w % 2 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
