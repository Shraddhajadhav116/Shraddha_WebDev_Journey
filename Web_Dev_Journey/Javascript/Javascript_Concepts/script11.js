// Favourite Movie Guess Game

let fav_movie = "3 Idiots";
let guess = " ";

guess = prompt("Guess the movie : ");

while (guess != fav_movie && guess != "quit") {
    console.log("Wrong Guess !");
    alert("Wrong Guess !");
    guess = prompt("Guess the movie : ");
}
if (guess == fav_movie) {
    console.log("You Win !");
    alert("You Win !");
}
if (guess == "quit") {
    console.log("You quit !");
    alert("You Quit !");
}