const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let count = 0;
const words = [];

rl.on("line", (input) => {
  if (!n) {
    n = parseInt(input);
  } else {
    const word = input.trim();
    if (word.length > 10) {
      words.push(word[0] + (word.length - 2) + word[word.length - 1]);
    } else {
      words.push(word);
    }
    count++;
    if (count === n) {
      console.log(words.join("\n"));
      rl.close();
    }
  }
});
