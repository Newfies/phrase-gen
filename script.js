let words = ["apple", "banana", "orange", "grape", "mango", "pineapple", 
             "strawberry", "blueberry", "kiwi", "watermelon", "peach", 
             "cherry", "plum", "lemon", "lime"];
let phrase = "";
let loop = 15

for (let i = 0; i < loop; i++) {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    phrase += randomWord + (i < loop - 1 ? " " : "");
}

alert(phrase)