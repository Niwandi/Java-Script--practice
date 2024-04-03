function addNumber(){
    let numOne= parseInt(document.getElementById("fnum").value);
    let numTwo= parseInt(document.getElementById("snum").value);
    let sum= numOne + numTwo;

    document.getElementById("finalAnswer").innerHTML= "Answer is "+ sum;
}