// 1.Write a program that converts the string into uppercase

var str = "My Name Is Aamir Nathani"

console.log(str.toUpperCase());

// document.body.innerHTML = str.toUpperCase()

// 2. Write a program that reads two strings and append first string to the second.
// So if first string is Good second string is Morning ,
// the program should print MorningGood

//remaining to solve


// 3.Program that reads string and count number of characters present in 
// the string

console.log("Number of characters in string are " + str.length)

// 4.Write a program that converts string like "124" to 124

var str2 = "124"
console.log(str2 + 15)
console.log(Number(str2) + 15)

// 5.Write a program to delete all vowels from a string. 
// Assume string is not more than 80 characters long




function play(str) {
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let result = "";
    for (let i = 0; i < str.length; i++) {

        if (!vowel.includes(str[i])) {
            result += str[i]
        }

    }
    console.log(result)
    // document.body.innerHTML = result
}
play(str)


//6.Write a program to check whether the string is alphanumeric or not,
// eg:batman@45 contains digit 45
var str5 = "batman@45"

function alphaNumeric(str5) {
    var alphaCond = /^[0-9a-zA-Z]+$/; // this is regular expresion

    if (str5.match(alphaCond)) {
        console.log(true)
    } else {
        console.log(false)
    }
}
alphaNumeric(str5)


//7.A program that reads three strings and prints the longest and smallest one


const inputTxt = document.querySelector("#input-txt")
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    const inputValue = inputTxt.value

    smallestStr(inputValue)

    longestStr(inputValue)

})



function longestStr(str) {
    var strSplit = str.split(" ")
    // console.log(strSplit)
    var longestLen = 0;
    var longestString = "";
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestLen) {
            longestLen = strSplit[i].length
            longestString = strSplit[i]
        }
    }
    console.log(longestLen)
    console.log("The largest string is " + longestString)
}

function smallestStr(str) {
    var strSplit = str.split(" ")
    // console.log(strSplit)
    var smallestLen = 1000;
    var smallestString = "";
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length < smallestLen) {
            smallestLen = strSplit[i].length
            smallestString = strSplit[i]
        }
    }
    console.log(smallestLen)
    console.log("The smallest string is " + smallestString)
}



// 8. A program that counts number of vowels and consonants in a String?


//1st approach

// function countVowels(str) {
//     // const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//     const vowel = "aeiouAEIOU"
//     const blank = " "
//     let counter = 0
//     let counterOne = 0
//     for (let i = 0; i < str.length; i++) {
//         if(vowel.indexOf(str[i]) !== -1){
//             counter+=1
//         }
//         else if(blank.indexOf(str[i]) !== -1){
//             counterOne = counterOne;
//             counter = counter;
//         }
//         else{
//             counterOne+=1
//         }
//     }    
//     return {counter,counterOne}
// }

// var result = countVowels(str);
// console.log(result)

// 2nd approach

function counter(str){
    let vowels = 0;
    let consonants = 0;
    const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    for(let i=0;i<str.length;i++){
        if(vowel.includes(str[i])){
            vowels++
        }
        if(!vowel.includes(str[i]) && str[i]!=" "){
            consonants++
        }
    }
    return {vowels,consonants};
}
var result = counter(str);
console.log(result)


// direct uproach

// function countVowels(str) {
//     return str.replace(/[^aeiou]/gi, "").length;
//   };

//   var result = countVowels(str);
//   console.log(result)