// Write a function describeValue that takes any value and returns a string with two pieces of information joined by a space, a pipe, and another space:

// <type of the value> | <truthy or falsy></truthy>


function describeValue(value){
    let typeOfvalue = typeof value
    let isTrue = value ? "truthy" : "falsy"

    return `${typeOfvalue} | ${isTrue}`

}

console.log(describeValue("hello"))
console.log(describeValue(""))
console.log(describeValue(25))
console.log(describeValue(0))
console.log(describeValue(true))
console.log(describeValue(null))
console.log(describeValue(undefined))
console.log(describeValue(NaN))
console.log(describeValue('0'))
