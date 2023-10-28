// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//SOLUTION
function createHelloWorld() {
    function helloWorld() {
      return "Hello World";
    }
   
    return helloWorld;
  }











// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//SOLUTION

function createCounter(n) {
    let count = n;
    function counter() {
      let result = count;
      count++;
      return result;
    }
    return counter;
  }


