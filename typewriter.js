// Function that takes an input string and prints it out one by one after the delayed time
const sentence = function(string) {

let delay = 0;

for (const char of string) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay = delay + 50; 
  }

};

sentence("hello there from lighthouse labs");
