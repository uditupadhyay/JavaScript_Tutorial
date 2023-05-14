function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Executed some task1")
    }, 5000);
    setTimeout(function exec() {
        console.log("Executed some task2")
    }, 5000);
    for(let i = 0; i < 100000; i++) {
        // some task
    }
    console.log("End");
}

process();
console.log("TATA");


// ----------------------------
for(var i = 0; i < 4; i++) {
    setTimeout(function () {
        console.log("Hi", i);
    }, i*1000);
}