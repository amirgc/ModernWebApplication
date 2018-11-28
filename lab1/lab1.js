//1. Using ES6 feature without using loop
String.prototype.filterWords = function(bannedWords) {
  return this.split(" ")
    .map(w => {
      if (bannedWords.indexOf(w) > -1) {
        return "***";
      }
      return w;
    })
    .join(" ");
};

console.log("This house is nice !!".filterWords(["house", "nice"]));

//2. Using Promises

String.prototype.filterWords = function(bannedWords) {
  let self = this;
  let filterPromise = new Promise(function(resolve, reject) {
    if (Array.isArray(bannedWords)) {
      let filteredWords = self.split(" ").map(word => {
        if (bannedWords.indexOf(word) > -1) {
          return "***";
        }
        return word;
      });
      resolve(filteredWords.join(" "));
    } else {
      reject("error");
    }
  });

  return filterPromise;
};

"This house is nice !!".filterWords(["house", "nice"]).then(data => {
  console.log(data);
});

//3 Async/Await
//not working
String.prototype.filterWords = async function(bannedWords) {
  let self = this;

  let filteredWords = self.split(" ").map(word => {
    if (bannedWords.indexOf(word) > -1) {
      return "***";
    }
    return word;
  });
  console.log(filteredWords.join(" "));
  return filteredWords.join(" ");
};
console.log("1");
try {
  let result = await String.filterWords.apply("This house is nice !!", [
    "house",
    "nice"
  ]);
  console.log("4");
} catch (error) {
  console.log(error);
}
console.log("3");

//4. Observables

const rx = require("rxjs");
const rxOps = require("rxjs/operators");

String.prototype.filterWords = function(bannedWords) {
  
    rx.from(this.split(" "))
    .pipe(
      rxOps.map(word => {
        if (bannedWords.indexOf(word) > -1) {
          return "***";
        } else {
          return word;
        }
      }),
      rxOps.reduce((w1, w2) => w1 + " " + w2)
    )
    .subscribe(
      filteredSentence => {
        console.log(filteredSentence);
      },
      err => console.log(err),
      null
    );
};

"This house is nice !!".filterWords(["house", "nice"]);
