import fs from "fs";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: any = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH || "");

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  console.log("firstMultipleInput", firstMultipleInput);

  // const x1 = parseInt(firstMultipleInput[0], 10);

  // const v1 = parseInt(firstMultipleInput[1], 10);

  // const x2 = parseInt(firstMultipleInput[2], 10);

  // const v2 = parseInt(firstMultipleInput[3], 10);

  // const result = kangaroo(x1, v1, x2, v2);

  // ws.write(result + '\n');

  ws.end();
}
