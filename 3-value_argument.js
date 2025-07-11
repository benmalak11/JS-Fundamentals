const args = process.argv.slice(2);
let count = 0;
for (const _ of args) {
  count++;
}
if (count === 0) {
    console.log("No argument");
}
else if (count === 1) {
    console.log("one argument");
    console.log(args[0]);
}
else {
    console.log(count + ' argument: ');
    console.log(args.join(''));
}