// create function - declare function

// parameters goes inside brackets - can give parameters any value e.g. e,x, y, numbers, value, etc

// document.getElementById('form'), addEventListener("submit", function doubleNumber(e){
//     e.preventDefault();
//     console.log('form submitted');
//     console.log(document.getElementById('numberInput').value);
//     // Get value from the input element
//     const inputValue = document.getElementById('numberInput').value;
//     const outputValue = inputValue * 2;
//     this.document.getElementById('output').innerHTML = outputValue;
//     //output of the function = return
// })

function doubleNumber() {
  // Get the value of the input field
  const inputNumber = document.getElementById("numberInput").value;
  console.log(inputNumber);
  //get the element we want to change
  const result = document.getElementById("outputNumber");
  //change the innerHTML of the element
  result.innerHTML = inputNumber * 2;
}





    // console.log(
    //     doubleNumber(5)
    // )


// document.getElementById('output').innerHTML = doubleNumber();
