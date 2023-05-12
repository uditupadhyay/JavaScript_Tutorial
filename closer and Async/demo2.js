function test() {
    for(var i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`); // 'i: ' + i
        }, i*1000);
    }
}

test();

// --------------------


function test() {
    for(let i = 0; i < 3; i++) {
        setTimeout(function exec() {
            console.log(`i : ${i}`); // 'i: ' + i
        }, i*1000);
    }
}

test();

//-------------
function todo(task)
{
    console.log("Starting todo");
    setTimeout(function fun(){
        console.log("completed",task);

    },5000);
    task = "dayananda";
    console.log("end of todo");
}
console.log("Starting");
todo("assignments");
console.log("Ending");