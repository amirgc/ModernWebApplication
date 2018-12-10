function foo() {
  console.log("foo");
}

function timeOut() {
  console.log("timeout");
}
setTimeout(timeOut, 0);
process.nextTick(foo);

console.log("last");
function synchronous() {
  let j = 0;
  for (let i = 0; i < 100000; i++) {
    j = j + 1;
  }
}
synchronous();
