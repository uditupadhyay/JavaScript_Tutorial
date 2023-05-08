var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    teachingAssistant = "vibhav"; // these are known as auto globals
    console.log(teacher);
    console.log(teachingAssistant);
}


fun();
console.log(teacher); // sanket
console.log(teachingAssistant); // autoglobal