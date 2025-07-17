// Qs1.Create a number variable num with some value.
// Now,print “good” if the number is divisible by 10 and print “bad” if it is not.

let number = 30;

if(number % 10 == 0){
    console.log("Good !");
}
else{
    console.log("Bad !");
}


// Qs2.Take the user's name & age as input using prompts.
//  Then return back the following statement to the user as an alert(by substituting their name & age):name is age years old.
//  [Use template Literals to print this sentence]

let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");

alert(`${name} is ${age} years old !`);

console.log(`${name} is ${age} years old !`);

// Qs3.Write a switch statement to print the months in a quarter.
//  Months in Quarter 1:January,February,March Months in Quarter2:April,May,June 
// Months in Quarter  3:July,August,September Months in Quarter 4:October,November,December
// [Use the number as the case value in switch]

let Quarter_number = prompt("Enter the quarter numaber : ");

switch(Quarter_number){
    case '1':
        console.log("Quarter 1 months : January, February, March");
        break;
    case '2':
        console.log("Quarter 2 months : April, May, June");
        break;
    case '3':
        console.log("Quarter 3 months : July, August, September");
        break;
    case '4':
        console.log("Quarter 4 months: October, November, December");
        break;
    default:
        console.log("All quarters are done !");
        break;
}


// Qs4.A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.
// For a given string print if it is golden or not.

let golden_str = prompt("Enter the string : ");

if((golden_str[0] == 'A' || golden_str[0] == 'a') && golden_str.length > 5){
    console.log("It is a golden string !");
}
else{
    console.log("It is not a golden string !");
}


// Qs5.Write a program to find the largest of 3 numbers.

let num1 = prompt("Enter first number : ");
let num2 = prompt("Enter second number : ");
let num3 = prompt("Enter third number : ");

console.log(`${num1}, ${num2}, ${num3}`);

if(num1 > num2 && num1 > num3){
    alert(`${num1} is a largest number !`);
    console.log(`${num1} is a largest number !`);
}
else if(num2 > num1 && num2 > num3){
    alert(`${num2} is a largest number !`);
    console.log(`${num2} is a largest number !`);
}
else{
    alert(`${num3} is a largest number !`);
    console.log(`${num3} is a largest  number !`);
}


// Qs6(Bonus).Write a program to check if 2 numbers have the same last digit.
// Eg:32 and 47852 have the same last digit i.e.2

let number_1 = prompt("Enter the first number : ");
console.log(`First number : ${number_1}`);
let number_2 = prompt("Enter the second number : ");
console.log(`Second number : ${number_2}`);

let last_digit_1 = number_1.slice(-1);
let last_digit_2 = number_2.slice(-1);

if(last_digit_1 == last_digit_2){
    alert(`Both numbers have same last digit ${last_digit_1} !`);
    console.log(`Both numbers have same last digit "${last_digit_1}" !`);
}
else{
    alert(`Both numbers have different last digit ${last_digit_1}, ${last_digit_2} !`);
    console.log(`Both numbers have different last digit "${last_digit_1}", "${last_digit_2}" !`);
}

