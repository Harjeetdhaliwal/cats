const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
console.log("breedDetailsFromFile: Calling read file.....");
fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
console.log("In readFile's callback: It has the data");

if(!error) {
  callback(data);
  console.log("I am completed!");
} else {
  callback(undefined);
}

});

};

module.exports = breedDetailsFromFile;
