
let num = prompt("Enter the number")
let arr = []
for(i=1;i<=10;i++){
   // console.log(i)
    arr.push(num*i)
    //console.log(arr)
}

const title = document.getElementById('title');
const list = document.getElementById('list')
console.log(title);
console.log(title.innerHTML);
console.log(title.innerText);
console.log(`${arr}\n`)


arr.forEach(ele=>{
    // list.innerText += `<li>${fruit}</li>`;
    list.innerHTML += `<td>${ele}</td>`;
})
