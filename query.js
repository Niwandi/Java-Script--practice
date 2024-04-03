document.querySelector("h3").style.backgroundColor= "green";
document.querySelector(".test").style.backgroundColor= "green";
document.querySelector("#main").innerHTML= "Fruits<ul><li>Apple</li><li>Orange</li><ul>";

const alertBtn= document.querySelector("#btn");
alertBtn.addEventListener("click", simpleFunc);
document.addEventListener('dblclick', doubleFunc);

function simpleFunc(){
    alert("Hello");
}
function doubleFunc(){
    alert("Hi Helloooooo");
}