// const cars = ['Mercedes', 'BMW', 'Audi', 'Vauxhall', 'Skoda']

// for (const car of cars) {
// console.log(car);

// }

   for (i=1; i<=100; i++) {

      if (i%5==0 && i%3==0) {
          console.log(i + " FizzBang");
      } else if(i%3==0) {
          console.log(i + " Fizz");
      } else if(i%5==0){
          console.log(i + " Bang");
      } else {
          console.log(i);
      }

    }