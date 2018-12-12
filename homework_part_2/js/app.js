// PART 1
// 1. The difference between interpolation and concatenation is
// is that concatenation combines two strings only and interpolation 
// allows you to use a variable in the string and to substitute the variable's
// current value.

// 2. Don't Repeat Yourself. For and While Loops are the main tools we've used to
// avoid repeptitive code.

// 3. Using one equals sign is assigning a value to a variable. Two equal signs
// is going to test the code. Three equal signs will test the code more strictly, 
// comparing the data value and type to one another. 
// One is assigning a value to a variable, the other is evaluating whether or not

// 4. We should always use const, unless we're expecting the value of our variables to change.

// 5. A parent directory is the directory containing the file/directory in question. 
// If Folder A contains File 1 and Folder 2, Folder A is the parent directory.

// 6. Without using the internet, you can find more information on UNIX commands by typing "man + the command"
// where the prompt is. Pressing "Q" will exit the manual screen.

// 7. Tab completion allows you to only type a few of the letters of the desired directory/file you're trying
// to interact with and then press tab and will auto-complete the name instead of the agent spelling out the 
// entire name each time you want to access or interact with the file/directory in question.




// PART 2
// a < b;
// c > d;
// 'Name' === 'Name';
// a < b < c;
// a = a < d;
// e ! 'Kevin';
// 48 == '48';




// PART 3
// 1. It is an infinite loop because there's nothing to change the value (true),
// and since it's a while loop, it will indefinitely log it's message into the console.

// 2. I would expect an error message with this code because 
// const runProgram = true
// and
// runProgram = false
// are contradictory values that you would not be permitted to assign to a const variable.

// 3. I would expect the code to print "A" to the console 21 times, 
// because it will run until i is no longer less than 20. The result in console was conclusive
// with what I was anticipating.




// PART 4
// 1. Both F and W loops allow you to run code to test for a conditional. For loops allow you to run 
// code through an array more appropriately than while loops, and are the better choice if you know 
// the number of times you want your code to run before it executes. While loops test whether conditional/s
// are true and execute code until the status of the conditional changes.

// 2.
let i = 0
while (i <= 999) {
    console.log(i);
    i++;
}

// 3. The first part of the control statement is the initializer. It dictates where the variable 
// loop will begin. The second part of the control statement compares the condition of the variable 
// against the value to determine if/when the loop will end. The final part of the control statement
// tells the loop what to do after it's completed one execution. For example i++ tells it to move
// onto the next indiced item, whereas i-- removes in reverse order. i+=10 would cycle through 
// 10 indexed items before running again.

// 4. 
let number = 999
while (number >= 0) {
    console.log("Counting down from " + number);
    number--;
}

// 5. 

for (let i = 1; i >= 10; i++) {
    console.log("The value of i is: " + i + " out of 10");
}

