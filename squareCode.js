const squareCode = function (message) {
  let len = 0;
  let array = [];
  for (let i = 0; i < message.length; i++) {
    if (message[i] !== " ") {
      len++;
      array.push(message[i]);
    }
  }
  let col = Math.ceil(Math.sqrt(len));
  let newArray = [];
  for (let i = 0; i < col; i++) {
    for (let j = col - 1; j < array.length; j++) {
      if (!newArray[i]) {
        newArray.push(array[i]);
      } else if (j % col === i) {
        newArray[i] += array[j];
      }
    }
  }
  return newArray.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
