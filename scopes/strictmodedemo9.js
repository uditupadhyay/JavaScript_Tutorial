"use strict"; // in strict mode auto globals are prohibited
function fun() {
    teachingAssitant = "JD";
    console.log(teachingAssitant);
}

fun();
//-------------------example 2
function fun() {
    ta = "vibhav";
    console.log(ta);
}

function gun() {
    "use strict";
    teacher = "sanket";
    console.log(teacher);
}

fun();
gun();