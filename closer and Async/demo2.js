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