# Kenzie Academy Challenge: Loops With Arrays

Follow the instructions provided on `my.kenzie.academy` for this challenge. The `code.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required section is **Reflection** (and the **Project Plan** if you complete the Advanced Level), but if you used a unit testing framework, also fill in the **Running the Unit Tests** section. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Running the Unit Tests (Basic and Intermediate Levels Only)

_(Instructions for how to install the unit testing framework and run the unit tests.)_

## Project Plan (Advanced Level Only)

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

##function eachNumber()
1- Display the 20 elements of sampleArray(469, 755, 244, ..., 940, 472).
}
##function evenNumbers() {
2 - Display all the even numbers contained in sampleArray(244, 758, 450, ..., 940, 472).
}
##function oddNumbers() {
3 - Display all the odd numbers contained in sampleArray(469, 755, 245, ..., 179, 535).
}
##function allTheEights() {
4 - Display the numbers divisible by 8 in sampleArray(712, 456, ..., 472).
}
##function thisTimesthis() {
5- Display the square of each element in sampleArray(219961, 570025, ..., 222784).
}
##function sumation() {
6 - Display the sum of all the elements in sampleArray.
}
##function smallest() {
7 - Display the smallest element in sampleArray.
}

####region - tests
##function 1- Display the 20 elements of sampleArray (469, 755, 244, ..., 940, 472).
console.assert(eachNumber(sampleArray) == sampleArray);
##function 2- Display all the even numbers contained in sampleArray (244, 758, 450, ..., 940, 472).
console.assert(oddNumbers(sampleArray) === []);
##function 3- Display all the odd numbers contained in sampleArray (469, 755, 245, ..., 179, 535).
console.assert(oddNumbers(sampleArray) === [])
##function 4- Display the numbers divisible by 8 in sampleArray (712, 456, ..., 472).
console.assert(squareValue(sampleArray) === [])
##function 5- Display the square of each element in sampleArray (219961, 570025, ..., 222784).
// set samplearray to single value, assert its value.
// set samplearray to multi value array, assert the entire thing with map
// assert each seperate value
// assert whole array
##function 6- Display the sum of all the elements in sampleArray.
console.assert(sumation(sampleArray) === 100, "the sum of these values is incorrect");##function 7- Display the smallest element in sampleArray.
console.assert(smallest(sampleArray) === 20, "smallest did not return the smallest value - 20");
##function 8- Display the largest element in sampleArray.
console.assert(largest(sampleArray) === 940, "largest did not return the largest value - 940");
//#endregion - tests

## Stage II - it appears that a single function can be created to do all this. it may take more than two parms, but the worker can gain those additional parms from math or from the calling routines.

information required,
starting number,
length of travel, or limit of travel, ---- must be one or the other.
direction of travel=

## Reflection

### Basic and Intermediate Levels Only

For a software developer, what are the benefits of good unit tests? Are there any drawbacks to writing unit tests?

for me, using Unit tests allows you to focus on the code at hand. if you break it, your tests will tell you, backup and try again. i love TDD.

### Advanced Level Only

For the bar graphs, did you uses JS or CSS to add in the styling? Explain your choice.

What are the advantages and disadvantages of using various JS methods instead of `for`/`while` loops?

_(Put your reflection answer here.)_
