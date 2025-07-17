// Guessing Game

let max_num = prompt(
  "Enter the maximum number for your guessing game limit : "
);

let random_number = Math.floor(Math.random() * max_num) + 1;

console.log(random_number);

let guessed_number = prompt(`Guess the number between 1 to ${max_num}`);

while (guessed_number != random_number || guessed_number != "quit") {
  if (guessed_number == random_number) {
    alert("You Win !");
    console.log("You have guessed the correct number !");
    console.log("You Win !");
  } else if (guessed_number != random_number) {
    alert("You have guessed the wrong number !");
    console.log("You have guessed the wrong number !");
  } else if (guessed_number == "quit") {
    alert("You quit !");
    console.log("You quit !");
  } else {
    console.log("Invalid request !");
  }
}
