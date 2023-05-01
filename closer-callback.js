function fun(x, fn) {
    /**
     * x -> number
     * fn -> callback function
     */

    // some logic
    for(let i = 0; i < x; i++) {
        console.log(i);
    }
    fn(); // calling the callback function passed
    // some more logic
}


// fun(10, function log() {
//     // this is the call back function
//     console.log("Custom logger");
// });

// fun(20, function () {
//     console.log("anonymous logger")
// });

let g = function process() {
    console.log("inside g");
    // return function () {console.log("returned function")}
}

function gun() {
    console.log("inside gun");
}

// fun(15, gun);
fun(2, g());// -> fun (2, undefined)



// ----------------------------------------------------- use of map

let arr = [1,2,3,4,5];
let x = arr.map(function process(v, i) {
    /**
     * v -> value
     * i -> index
     */
    console.log(v, i);
    return v*v;
});

console.log(x)
console.log(arr);