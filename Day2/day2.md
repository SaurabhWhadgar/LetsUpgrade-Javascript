# Day 2 Code

## Q1 Write a JS code which takes input from the user and logs it in the console.

To take user input in JS we use prompt method, we need to store the value of user input in let name variable.
if no name is provided by defualt it will take Saurabh as input.

#### Prompt
```
let name = prompt("What is your name","Saurabh")
console.log(name)
```

## Q2 Explain with examples the remaining methods of String and Array

## String
- substring
- replaceAll
- replace

#### String methods
```
var str = "We are, learning Javascript";
var res = str.substring(7, 13);
var strsplit = str.splice(
var n = str.replace("are", "");
var splicedstr = str.split(",");   
```
## Array
- reverse
- concat
- unshift
- pop
- push
- length
- delete 
- splice
- toString
- slice


## Q3 Ask the user if he is 21+ and log the value "Can drink", "Cannot Drink".

#### Confirm
```
let age = confirm("Are you over 21")
console.log(age)

if(age){
    console.log("Lets Drink")
}else{
    console.log("Not to Drink")
}

```
