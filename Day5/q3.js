
function getdata(){
    setTimeout(() => {
        async function fetchtodos(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            console.log(data)
        }
        fetchtodos(); 
    }, 3000);
}

getdata()

function printdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            getdata()
            const error = false;

            if(!error){
                resolve()
            }else{
                reject("Opps an error")
            }
        },300)
    })
}