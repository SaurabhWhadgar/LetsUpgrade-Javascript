let x = prompt("Enter your commission")

if(x>0 && x<5000){
    console.log("2%")
}else if(x > 5001 && x < 10000){
    console.log("5%")
}else if(x > 10001 && x < 20000){
    console.log("7%")
}else if(x > 20000){
    console.log("10%")
}