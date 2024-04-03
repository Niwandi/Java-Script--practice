document.getElementById("main").innerHTML= localStorage.getItem("Name1");

function main(){
    let x= document.getElementById("fname").value;
    localStorage.setItem("Name1", x);

    localStorage.setItem("Name", "Niwandi"); //-> how to set a name
document.getElementById("main").innerHTML= localStorage.getItem("Name");
}

