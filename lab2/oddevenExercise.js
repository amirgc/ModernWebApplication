Array.prototype.even = function() {
  let self = this;
  return new Promise(function(resolve, reject) {
    let arr = self.filter(num => num % 2 === 0);
    resolve(arr);
  });

};

Array.prototype.odd = function() {
  let self = this;
  return new Promise(function(resolve, reject) {
    let arr = self.filter(num => num % 2 !== 0);
    resolve(arr);
  });
  
};

console.log("Start");
[2, 3, 4, 5].even().then(data => {
  console.log("even", data);
});

[2, 3, 4, 5].odd().then(data => {
  console.log("odd", data);
});
console.log("End");
