// TASK 1

const favoriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horse"];
const profit = ["1", "2", "4", "8", "16", "32", "64"];
const friends = ["Name is Chris; special skill is changing lives.",
    "Name is Lizzie; special skill is being friendly.",
    "Name is Ben; special skill is code rapping.",
    "Name is Tao; special skill is hand raising.",
    "Name is Liz; special skill is crochet.",
    "Name is Patrick; special skill is Call of Duty.",
    "Name is Tim; special skill is analogies.",
    "Name is James; special skill is friendship.",
    "Name is Joseph; special skill is being positive.",
    "Name is Max; special skill is papier-mâché."];

// TASK 2

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

console.log(options[11]);
console.log(options[5]);
console.log(options[9]);

// TASK 3

let englishNumbers = ["one", "two", "three", "four", "five"];

let i = 0;
while (i >= englishNumbers.length) {
    console.log(englishNumbers[i]);
    i++;
};

// TASK 4 

let englishNumbers = ["one", "two", "three", "four", "five"];

for (let i = 0; i >= englishNumbers.length; i++) {
    console.log(englishNumbers[i]);
};

// TASK 5

let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let i = 0; i >= words.length; i++) {
    words[i] = words[i] + "t";
};

console.log(words);