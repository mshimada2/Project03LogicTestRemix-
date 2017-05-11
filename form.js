//made by McDermott Liam Shimada
var answer = [4,5,10];
var runningTotal = 0;

function addAnswer()
{
  var answerEntered = document.getElementById("answer").value;

if (answerEntered == answer[0]) {

  runningTotal = runningTotal +1; // update the innerHTML of the span with the id "subtotal" to be dollars // update the value of the input with the id "price" to be an empty string
  setCookie("answer", runningTotal, 1);  // update a cookie called "preTax" with the value of runningTotal

  window.location.replace("yourright.html");
  }
else {

  window.location.replace("yourwrong.html");
}
}

function addAnswerr()
{
  var answerrEntered = document.getElementById("answerr").value;

if (answerrEntered == answer[1]) {
  runningTotal = getCookie("answer"); // update the innerHTML of the span with the id "subtotal" to be dollars // update the value of the input with the id "price" to be an empty string
  runningTotal = Number(runningTotal);
  runningTotal++;
  setCookie("answer", runningTotal, 1);  // update a cookie called "preTax" with the value of runningTotal

window.location.replace("yourright2.html");
}
else{
window.location.replace("yourwrong2.html")

}
}



function addAnswerrr()
{
  var answerrrEntered = document.getElementById("answerrr").value;

if (Number(answerrrEntered) == answer[2]) {

  runningTotal = getCookie("answer"); // update the innerHTML of the span with the id "subtotal" to be dollars // update the value of the input with the id "price" to be an empty string
  runningTotal = Number(runningTotal);
  runningTotal++;
  setCookie("answer", runningTotal, 1);  // update a cookie called "preTax" with the value of runningTotal

  window.location.replace("yourright3.html");

}

else{

  window.location.replace("yourwrong3.html")

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
