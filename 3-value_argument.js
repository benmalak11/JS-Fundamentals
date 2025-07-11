const args = process.argv.slice(2);
let count = 0;
let firstArg;

for (const element of args) {
  if (count === 0) {
    firstArg = element;
  }
  count++;
}

if (count === 0) {
  console.log('No argument');
} else {
  console.log(firstArg);
}