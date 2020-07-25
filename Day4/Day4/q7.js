let num = prompt("Enter the number")
/*
for(var i=2; i<num; i++){
    if(num % i == 0){
        console.log("Not Prime Number")
    }else{
        console.log('Prime Number')
    }
}
*/
let odd =[]
for (let index = 0; index <= num; index++) {
        odd.push(index)
}

odd = odd.filter((number) => {
  for (var i = 2; i <= num; i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(odd);