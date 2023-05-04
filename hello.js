// (#1)

// function isOdd(num){
//     let odds = num % 2 === 1
// return odds

// }

// console.log(isOdd(2))
// console.log(isOdd(5))
// console.log(isOdd(-17))
// -----------------------------------------

// (#2)
// 
// function plusFive(num){
// let sum = num + 5
// return sum

// }

// console.log(plusFive(10))
// console.log(plusFive(2))
// console.log(plusFive(-8))
// -----------------------------------------------

// (#3)

// function threeOrSeven(num) {
// if (num % 3 === 0 || num % 7 === 0)

// return true

// else 

// return false

// }

// console.log(threeOrSeven(3))  // => true
// console.log(threeOrSeven(42))  // => true
// console.log(threeOrSeven(8))  // => false
// -----------------------------------------------------

// (#4)

// function hello(str) {
// newword = "hello" + ", " + str

// return newword
// }

// console.log(hello("friend"))
//---------------------------------------------------------

// (#5)

// function yell(str) {

// return str.toUpperCase(str) + "!!!"

// }

// console.log(yell("I want to go to the store")) // => "I WANT TO GO TO THE STORE!!!"
// console.log(yell("Time to program")) // => "TIME TO PROGRAM!!!"

//---------------------------------------------------------------------

// (#6)

// function whisper(str) {

//     return "..." + str.toLowerCase(str) + "..."

// }

// console.log(whisper("Hey Anthony")) // => "...hey anthony..."
// console.log(whisper("YEA! that was fun")) // => "...yea! that was fun..."

//---------------------------------------------------------------------

// (#7 v.1)

// function isSubstring(searchString, subString) {

//     let newString = searchString.toLowerCase(searchString)
//     let newSub = subString.toLowerCase(subString)

//     if (newString.indexOf(newSub) > -1)

//     return true

//     else 

//     return false

// }



// console.log(isSubstring("The cat went to the store", "he cat went")) // => true
// console.log(isSubstring("Time to program", "time")) // => true
// console.log(isSubstring("Jump for joy", "joys")) // => false

// (#7 v.2)
// ----------------------------------------------------------------


// function isSubstring(searchString, subString) {

//     let newString = searchString.toLowerCase(searchString)
//     let newSub = subString.toLowerCase(subString)
    
//     let finalstring = newString.indexOf(newSub) > -1 

//     return finalstring


// }



// console.log(isSubstring("The cat went to the store", "he cat went")) // => true
// console.log(isSubstring("Time to program", "time")) // => true
// console.log(isSubstring("Jump for joy", "joys")) // => false

// -----------------------------------------------

//(#8)

// function echo(string) {
// let caps = string.toUpperCase(string)
// let lowercase = string.toLowerCase(string)
// let newstring = caps + "..." + (string) + "..." + lowercase

// return newstring

// }

// console.log(echo("Mom!")) // => "MOM! ... Mom! ... mom!"
// console.log(echo("hey")) // => "HEY ... hey ... hey"
// console.log(echo("JUMp")) // => "JUMP ... JUMp ... jump"
// ----------------------------------------------------------------

// (#9) -- LOOK AGAIN

// function isEven(num) {

//     let even = num % 2 === 0

//     return even



// }

// console.log(isEven(2)) // => true
// console.log(isEven(5)) // => false
// ----------------------------------------------------------------

// (#10)

// function averageOfFour(num1, num2, num3, num4) {
//     let sum = num1 + num2 + num3 + num4
//     average = sum / 4 

//     return average



// }

// console.log(averageOfFour(10, 10, 15, 5)) // => 10
// console.log(averageOfFour(3, 10, 11, 4)) // => 7
// console.log(averageOfFour(1, 2, 3, 4)) // => 2.5
// ---------------------------------------------------------
// LOOPS

// function printNums(start, end, step) {

//     for (let i = start; i <=end; i += step) {

//         console.log(i)
//     }

// }

// console.log(printNums(0, 12, 1))
// console.log(printNums(20, 30, 2))
// console.log(printNums(0, 12, 3))
// console.log(printNums(0, 95, 5))
//--------------------------------------------------
// for loops

// for (let i = 1; i <= 10; i += 1) {

// console.log(i)

// }
// ----------------------------------------------------

// while loops

// i = 1

// while (i <=10) {

//     console.log(i)

//     i++

// }
// break & continue 
// function test() {

// let str = "abcd"
// for (let i = 0; i < str.length; i++) {

//     if (i === 1) {
//         return "hello world"
//     }

//     console.log(str[i])

// }

// console.log("after for loop")

// } 
// console.log(test())

// problem set #1

// function logbetween(lowNum, highNum) {

//     for (i = lowNum; i <= highNum; i++) {

//         console.log(i)
//     }


// }

// logbetween(-1, 2)
// logbetween(14, 6)

// function printFives(max) {

//     for (i = 0; i < max; i += 5) {

//         console.log(i)

//     }




// }

// printFives(20)
// -----------------------------------------------------------
// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.

// function printReverse(min, max) {

//     for (i = max - 1; i > min; i--)  {

//         console.log(i)
//     }
// }

// printReverse(13, 18)
// -----------------------------------------------------------
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.

// TRY AGAIN IN A SEC
// -----------------------------------------------------------

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.

// function isFactorOf(number, factor) {

//     if (number % factor === 0)

//         return true
//     else 

//         return false

//     }

// console.log(isFactorOf(6,2)) // => true
// console.log(isFactorOf(-6, 2)) // => true
// console.log(isFactorOf(5,0)) // => false
// console.log(isFactorOf(22, 7)) // => false
// -----------------------------------------------------------
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.

// function fizzBuzz(max) {

//     for(i = 1; i < max; i++) {
        
//         if (i % 3 === 0 || i % 5 === 0 && !(i % 3 === 0 && i % 5 === 0))

//         console.log(i)
        
//     }
// }

// fizzBuzz(20)

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.

// function isPrime(number) {

//     if (! (number % 2 === 0) && ) {

//         return true
        
//     } else {

//         return false

//     }
// }

// console.log(isPrime(2)) // => true
// console.log(isPrime(10)) // => false
// console.log(isPrime(11)) // => true
// console.log(isPrime(9)) // => false
// console.log(isPrime(2017)) // => true
// -------------------------------------------------------------

// function printForwards(start, end) {
//     for (let counter = start; counter <= end; counter++) {
//       console.log(counter);
//     }
//   }
  
//   printForwards(4, 11)

// function printForwards(start, end) {

//     for (let counter = start; counter <= end; counter++ ) {

//         console.log(counter)

// }
// }

// printForwards(12, 40)

// let alphabet = [
// 'a', 'b', 'c', 'd', 'e', 'f',
// 'g', 'h', 'i', 'j', 'k', 'l',
// 'm', 'n', 'o', 'p', 'q', 'r',
// 's', 't', 'u', 'v', 'w', 'x',
// 'y', 'z'
// ]

// let arr = []

// arr.push(null)
// arr.push('jonathan')
// arr.push(3)
// arr.push(false)

// console.log(arr)

// let fruits = ["apple", "pear"]

// fruits.push("watermelon")

// console.log(fruits)

// let ele = fruits.pop()
// console.log(fruits)
// console.log(ele)

// fruits.unshift("orange")

// console.log(fruits.shift())
// console.log(fruits)

// let names = ["diaz", "lacap", "rodriguez"]
// let words = names.join("-")

// console.log(words)
// console.log(words.split("-"))

// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.

function logEach(arr) {
for (let i = 0; i < arr.length; i++) {

    console.log(i + ": " + arr[i])

}

}

logEach(["Anthony", "John", "Carson"])
