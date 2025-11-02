/* Exercise 1: Complex Arithmetic and Standard Rules */
var complexArithmeticResults = 3 + 5 * (10 / 2) - (8 - 4); // 3 + 5 * (10 / 2) - (8 - 4) = 3 + 5 * (5) - (4) = 3 + 25 - (4) = 28 - 4 = 24
console.log("Exercise 1 results:", complexArithmeticResults); // 24

/* Exercise 2: Case Sensitivity Test */
var projectIdentifier = "COMP484";
// ProjectIdentifier = "JS_Advanced"; // ReferenceError if executed: ProjectIdentifier is not defined
// 'projectIdentifier' and 'ProjectIdentifier' are different variables due to JavaScript case sensitivity
projectIdentifier = "JS_Advanced";
console.log("Exercise 2 final projectIdentifier:", projectIdentifier); // JS_Advanced

/* Exercise 3: String Quoting Challenge */
var courseDescription = "The course is interactive and involves 'scripting' logic."; // "The course is \"interactive\" and involves 'scripting' logic." escaped double quotes around interactive for clarity (keeping sentence structure the same)
console.log("Exercise 3 courseDescription", courseDescription); // The course is interactive and involves 'scripting' logic

/* Exercise 4: Escaping and Console Output */
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4 errorMessage:", errorMessage); // An internal server error occurred: "Access Denied"

/* Exercise 5: Type Coercion with Non-Plus Operators */
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB; // "4" (string) coerced to 4 (number)
var resultMultiplication = valueA * valueB; // "4" (string) coerced to 4 (number)
console.log("Exercise 5 resultSubtraction:", resultSubtraction); // 6
console.log("Exercise 5 resultMultiplication:", resultMultiplication); // 40
console.log("Exercise 5 valueA:", typeof valueA); // number
console.log("Exercise 5 valueB:", typeof valueB); // string
// typeof valueB remains "string" because the variable's stored type hasn't changed; coercion happened for the operation

/* Exercise 6: Understanding `null` and `undefined` Types */
var unassignedVar;
var explicitNull = null;
console.log("Exercise 6 unassignedVar:", typeof unassignedVar); // undefined
console.log("Exercise 6 explicitNull:", typeof explicitNull); // object
// historical bug/quirk retained for backward compatibility. `null` is actually its own primitive representing the intentional absence of any object value, but `typeof` reports "object"

/* Exercise 7: Complex Arithmetic and Standard Rules */
var isBlocking = true;
console.log("Exercise 7 isBlocking:", typeof isBlocking); // boolean
isBlocking = "true";
console.log("Exercise 7 isBlocking:", typeof isBlocking); // string

/* Exercise 8: Complex Arithmetic and Standard Rules */
// var 1stPlace = "gold"; // cannot start identifier with a number
// var user name = "alice"; // spaces are not allowed in identifiers
// var total$% = 100; // percent sign (%) is not allowed in identifier names (only $, _ and letters/numbers after the first char)

/* Exercise 9: Complex Arithmetic and Standard Rules */
var counterValue = 50;
counterValue /= 5; // 10
counterValue -= 3; // 7
console.log("Exercise 9 final counterValue:", counterValue); // 7

/* Exercise 10: Complex Arithmetic and Standard Rules */
var x = 10;
var y_post = x++; // y_post gets the original value of x (10), then x increments to 11
console.log("Exercise 10 y_post:", y_post); // 10
console.log("Exercise 10 x after x++:", x); // 11

x = 10;
var z_pre = ++x; // x increments first (to 11), then z_pre gets the incremented value (11)
console.log("Exercise 10 z_pre:", z_pre); // 11
console.log("Exercise 10 x after ++x:", x); // 11
// postfix (x++): returns the value, then increments
// prefix (++x): increments first, then returns the incremented value

/* Exercise 11: Complex Arithmetic and Standard Rules */
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean)
    console.log("Exercise 11: 0 and false are loosely equal with ==");
// javaScript coerces types. `false` is coerced to 0 for numeric comparison, so 0 == 0 (false) is true

/* Exercise 12: Strict Inequality Test */
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB)
    console.log("Exercise 12: versionA and versionB are NOT strictly equal (===)");
else
    console.log("Exercise 12: versionA and versionB are strictly equal");

/* Exercise 13: Logical OR and AND Combination */
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) // (isLoggedIn == true AND isSubscriber == true) OR (isLoggedIn == true && isTrialExpired == false)
    console.log("Exercise 13: Access granted");
else
    console.log("Exercise 13: Access denied");

/* Exercise 14: Simulating XOR using Nested Conditionals */
var conditionA = true;
var conditionB = false;
if ((conditionA && !conditionB) || (!conditionA && conditionB)) // (conditionA == true AND conditionB == false) OR (conditionA == false AND conditionB == true)
    console.log("Exercise 14: XOR Success");
else
    console.log("Exercise 14: XOR Fail");

/* Exercise 15: Converting IF/ELSE to Ternary Operator */
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred")
    loadStatus = "Non-blocking";
else
    loadStatus = "Potentially Blocking";
console.log("Exercise 15 loadStatus (if/else):", loadStatus); // Non-blocking
//  variable                    condition                      if condition true   if condition false
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking"; // if scriptLoadType equals "deferred" assign loadStatusTernary "Non-blocking" else assign "Potentially Blocking"
console.log("Exercise 15 loadStatusTernary (ternary):", loadStatusTernary); // Non-blocking

/* Exercise 16: Commenting and Code Structure */
function calculateRenderTime() {
    /*
      multi-line comment explaining function:
      calculate the time taken to parse HTML and execute JavaScript that affects initial render. This could combine DOM parsing time + script execution time
    */

    // single line comment inside the function body describing an internal step.
}

/* Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY) */
var today = new Date();
var month = today.getMonth() + 1; // months are zero-indexed
var day = today.getDate();
var year = today.getFullYear();
// add leading 0 (MM and DD)
if (month < 10)
    month = "0" + month;
if (day < 10)
    day = "0" + day;
console.log("Exercise 17:", "Today is " + month + "/" + day + "/" + year); // 11/02/2025

/* Exercise 18: Mixed Type Arithmetic Explanation */
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2; // numeric + string -> string concatenation -> "205"
var diffResult = val1 - val2; // subtraction coerces "5" to 5 (number) -> numeric subtraction -> 15
console.log("Exercise 18 sumResult:", sumResult); // 205
console.log("Exercise 18 diffResult:", diffResult); // 15
/*
    the `+` operator performs string concatenation if either operand is a string, so 20 + "5" -> "205"
    other arithmetic operators (like -) force numeric conversion, so 20 - "5" -> 15 after coercion
*/

/* Exercise 19: Conditional based on Type Check */
var dataInput = 484;
if (typeof dataInput === "number")
    console.log('Exercise 19: Input is numeric.');
else {
    dataInput = true;
    console.log('Exercise 19: dataInput type after reassignment:', typeof dataInput);
}

/* Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual) */
var h1 = document.createElement('h1');
h1.innerHTML = "Interactive Layer Loaded";
document.body.appendChild(h1);
/*
    scripts run from top to bottom
    if script is placed inside the <head> of a webpage, it runs BEFORE the browser has finished reading the <body> content
    you'll get error "Cannot set property 'innerHTML' of null"
    the script is trying to access the body while those elements don't exist yet
    adding defer tells browser load script but execute AFTER parsing
    adding async, scripts load independently and execute as soon as they finish loading, they can run BEFORE or AFTER the HTML finishes parsing
*/