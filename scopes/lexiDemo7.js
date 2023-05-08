var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    teachingAssistant = "vibhav";
    console.log(teacher);
    console.log(teachingAssistant);
}

console.log(teachingAssistant); // refernence error
fun();
console.log(teacher); // sanket