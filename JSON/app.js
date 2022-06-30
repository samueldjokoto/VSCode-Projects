let record = [
    {
    "title": "Here We Go",
    "Price": "20",
    "Currency": "GBP",
    "Description": "This Is A Song"
    }
];

let vehicles = [
    {
    "name" : "Mercedes",
    "Price" : 20000,
    "Currency" : "GBP",
    "Description" : "This is A Car"
    },
        {
    "name" : "BMW",
    "Price" : 18000,
    "Currency" : "GBP",
    "Description" : "This is A Car"
    },
        {
    "name" : "Audi",
    "Price" : 15000,
    "Currency" : "GBP",
    "Description" : "This is A Car"
    }
];


for(let item of vehicles){
    let container = document.createElement("div");
    container.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.Description}</p>
    <span>${item.Currency == "GBP" ? "£" : "$"}  ${item.price} </span>
    <hr/>
    `;
    document.getElementById("vehicles").appendChild(container);
}

// console.log(vehicles[1])


// console.log(record.title);
// console.log(record.Price);

// for(let k in record){
//     console.log(`${k}  =  ${record[k]}`);
// }

document.querySelector('[name="secret"]').value = "new value 789";


//console.log(window.location)
//console.log(window.location.href)
//console.log(window.location.search)
let urlParams = new URLSearchParams (window.location.search)
console.log(urlParams)
console.log(urlParams.get('username'))
console.log(urlParams.get('password'))
console.log(urlParams.get('location'))
//your link to your html file here so as it loads up on the page copy it?username=7687&password=86787&location=Here&secret=new+value+789
// copy above into the url bar at top hit enter then refresh the page
if(urlParams.has('id') === "789"){
    document.getElementById("display").innerHTML = "You are logged in"
   
}

if(urlParams.has('location') === true){
    document.getElementById("display").innerHTML = "You are logged in"
    document.querySelector('[name="secret"]').value = "urlParams"
}