let num = prompt("Enter the number ")

//et arr = [0,num]
var arr = []; 

for(var i=0; i<=num; i++){
    arr.push(i);
}
console.log(arr)

let cube = arr.filter(el=> el%2!=0).map(el => el*el*el)
console.log(cube)