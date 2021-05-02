function fizzBuzz(n) {
    // Write your code here
    
    for (let i = 1; i <= n; i++) {
        // check if i is a multiple of both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            // print FizzBuzz
            console.log('FizzBuzz'); 
        } else if (i % 3 === 0) { // check if i is a multiple of 3 (but not 5)
            // print Fizz
            console.log('Fizz');
        } else if (i % 5 === 0) { // check if i is a multiple of 5 (but not 3)
            // print Buzz
            console.log('Buzz');
        } else { // if i is not a multiple of 3 or 5
            // print the value of i
            console.log(i)
        }
    } // end for-loop
}