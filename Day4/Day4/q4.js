console.log('Enter 1 for addtion');
console.log('Enter 2 for Substraction');
console.log('Enter 3 for Mutliplication');
console.log('Enter 4 for Division');
console.log('Enter 5 for Square root');
console.log('Enter 6 for Percentage');

var x = prompt("Enter number What you want do")
console.log(x)
let num1 = prompt("Enter number 1");
let num2 = prompt("Enter number 2");
let result = 0;


switch (Number(x)){
    case 0:
        result = Number(num1) + Number(num2)
        console.log(result)
      break;
    case 1:
        result = Number(num1) - Number(num2)
        console.log(result)
      break;
      case 2:
        result = Number(num1) * Number(num2)
        console.log(result)
      break;
      case 3:
        result = Number(num1) / Number(num2)
        console.log(result)
      break;
      case 4:
        result = Number(num1) - Number(num2)
        console.log(result)
      break;
      case 5:
        result = (Number(num1)/Number(num2))*100
        console.log(result)
      break;
    default:
      text = "No value found";
  }