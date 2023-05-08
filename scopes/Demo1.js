let name = "Udit";
function greet() {
    console.log("greetings !", name);
    var x = 10;  // var x and function test is function scope 
    function test() {
        console.log("test", x);
    }
    test();
    console.log(x);
}


function fun() {
    console.log("have fun! ", name);
}

greet();
fun();