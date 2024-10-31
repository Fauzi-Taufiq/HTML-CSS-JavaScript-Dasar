// let result = 1 + 2;//3
// document.writeln("<p>1 + 2 = " + result + "</p>");
// let originalResult = result; //3

// result = result - 1; //2
// document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
// originalResult = result; //2

// result = result * 2; //4
// document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>")


//OPERATOR ASSIGMENTS
let result = 1 + 2;//3
document.writeln("<p>1 + 2 = " + result + "</p>");
let originalResult = result; //3

result -= 1; //2
document.writeln("<p>" + originalResult + " - 1 = " + result + "</p>");
originalResult = result; //2

result *= 2; //4
document.writeln("<p>" + originalResult + " * 2 = " + result + "</p>")

//OPERATOR UNARY
let unary = +1;
document.writeln("<p>" + unary + "</p>")

unary--;
document.writeln("<p>" + unary + "</p>")

unary++;
document.writeln("<p>" + unary + "</p>");

unary = -unary;
document.writeln("<p>" + unary + "</p>")