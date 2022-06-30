       function howMany(selectObject) {

let numberSelected = 0;
for (let i = 0; i < selectObject.options.length; i++) {
if (selectObject.options[i].selected) {
numberSelected++;
}
}
return numberSelected;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
const musicTypes = document.selectForm.musicTypes;
console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});

       <form name="selectForm">
    <label for="musicTypes">Choose some music types, then click the button below:</label>
    <select id="musicTypes" name="musicTypes" multiple>
        <option selected>R&B</option>
        <option>Jazz</option>
        <option>Blues</option>
        <option>New Age</option>
        <option>Classical</option>
        <option>Opera</option>
    </select>
    <button id="btn" type="button">How many are selected?</button>

</form>   
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       // function myfunction() {
        //     document.getElementById('demo').innerHTML = "Hello Javascript";
        //     document.getElementById('demo').style.color = 'white';
        //     document.getElementById('demo').style.background = 'black';
        // }

// const cars = [Mercedes, BMW, Audi, volvo, Nissan, Bentley];

// for (let i = 0; i < cars.length; i++){
// cars [i] += "<br>";
// }

// document.getElementById("demo").innerHTML = text;

        // let x, y, z;

        // x = "sam";
        // y = "biney";
        // z = x + y;

        // document.getElementById('demo').innerHTML = "the value of z is " + z + ".";
