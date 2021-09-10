  var ime=document.querySelector("#ime").value;


let dugme=document.getElementById("dugme");

ime.addEventListener('keyup',() => {


if(ime.length < 10) dugme.disabled=true;
else dugme.disabled=false;

});