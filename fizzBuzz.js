function fizzBuzz() {
  for (var iCtr = 1; iCtr<=100; iCtr++){
    if (iCtr % 3 == 0 && iCtr % 5 == 0) {
      console.log(iCtr + ' FizzBuzz');
    }
    else if (iCtr % 3 == 0){
      console.log(iCtr + ' Fizz');
    }
    else if (iCtr % 5 == 0) {
      console.log(iCtr + ' Buzz');
    }
    else {
      console.log(iCtr);
    };
  };
};

fizzBuzz();
