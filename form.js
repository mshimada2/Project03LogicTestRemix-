//made by McDermott Liam Shimada 
function validateAnswer(){

  var answerEntered = document.getElementById("answer").value;

if (answerEntered != 31){
  document.getElementById("answerError").innerHTML="Wrong Answer";
  document.getElementById("answerError").classList.remove("hidden-message");
  document.getElementById("answerError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("answerGroup").classList.add("has-error");

  }

else {
document.getElementById("answerError").innerHTML="Correct!";
document.getElementById("answerError").classList.remove("hidden-message");
document.getElementById("answerError").classList.add("shown-message");
//Turn the username items red
  document.getElementById("answerGroup").classList.remove("has-error");
document.getElementById("answerGroup").classList.add("has-success");


}
}


//page 2

function validateAnswerr(){

  var answerrEntered = document.getElementById("answerr").value;

if (answerrEntered != 60){
  document.getElementById("answerrError").innerHTML="Wrong Answer";
  document.getElementById("answerrError").classList.remove("hidden-message");
  document.getElementById("answerrError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("answerrGroup").classList.add("has-error");

  }

else {
document.getElementById("answerrError").innerHTML="Correct!";
document.getElementById("answerrError").classList.remove("hidden-message");
document.getElementById("answerrError").classList.add("shown-message");
//Turn the username items red
  document.getElementById("answerrGroup").classList.remove("has-error");
document.getElementById("answerrGroup").classList.add("has-success");


}
}


//page3

function validateAnswerrr(){

  var answerrrEntered = document.getElementById("answerrr").value;

if (answerrrEntered != 90){
  document.getElementById("answerrrError").innerHTML="Wrong Answer";
  document.getElementById("answerrrError").classList.remove("hidden-message");
  document.getElementById("answerrrError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("answerrrGroup").classList.add("has-error");

  }

else {
document.getElementById("answerrrError").innerHTML="Correct!";
document.getElementById("answerrrError").classList.remove("hidden-message");
document.getElementById("answerrrError").classList.add("shown-message");
//Turn the username items red
  document.getElementById("answerrrGroup").classList.remove("has-error");
document.getElementById("answerrrGroup").classList.add("has-success");


}
}













var runningTotal = 0;

function addAnswer()
{
  var answerEntered = document.getElementById("answer").value;

if (answerEntered != 31) {

  alert("Try Again!");

}

else{//OTHERWISE,
runningTotal = runningTotal +1; // update the innerHTML of the span with the id "subtotal" to be dollars // update the value of the input with the id "price" to be an empty string
setCookie("answer", runningTotal, 1);  // update a cookie called "preTax" with the value of runningTotal

alert("Correct!");

}
}




function addAnswerr()
{
  var answerrEntered = document.getElementById("answerr").value;

if (answerrEntered != 60) {

  alert("Try Again!");

}

else{//OTHERWISE,
runningTotal = getCookie("answer"); // update the innerHTML of the span with the id "subtotal" to be dollars // update the value of the input with the id "price" to be an empty string
runningTotal = Number(runningTotal);
runningTotal++;
setCookie("answer", runningTotal, 1);  // update a cookie called "preTax" with the value of runningTotal

alert("Correct!");

}
}



function addAnswerrr()
{
  var answerrrEntered = document.getElementById("answerrr").value;

if (answerrrEntered != 90) {

  alert("Try Again!");

}

else{//OTHERWISE,

  runningTotal = getCookie("answer"); // update the innerHTML of the span with the id "subtotal" to be dollars // update the value of the input with the id "price" to be an empty string
  runningTotal = Number(runningTotal);
  runningTotal++;
  setCookie("answer", runningTotal, 1);  // update a cookie called "preTax" with the value of runningTotal

alert("Correct!");
}
}










//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function calculateAnswers(){

  var total = getCookie("answer");


    document.getElementById("answer").innerHTML = (total);



}
