const readline = require("readline");

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

lineDetail.question("Enter your name: ", (ans) => {
  console.log(`Hi, ${ans}!`);
  lineDetail.close();
});
