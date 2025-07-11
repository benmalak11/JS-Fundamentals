const args = process.argv.slice(2);
let count = 0;
for (const _ of args) {
  count++;
}
if (count === 0) {
    console.log("No argument");
}
else {
    console.log("School");
    console.log("HBTN");
}