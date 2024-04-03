function main(){
    let confirm= document.getElementById("mainResult").innerHTML;
    if(confirm== "You Lost"){
        alert("Game over");
    }else{
    let x
    do{
        x= Math.floor(Math.random()* 100/7.6);
    }while(x==0);
   
    let currentT= parseInt(document.getElementById("result").innerHTML);
    let total= x + currentT;
    document.getElementById("result").innerHTML= total;

    if(total<21){
        document.getElementById("mainResult").innerHTML= "Generate another card";
    }else if(total== 21){
        document.getElementById("mainResult").innerHTML= "You've won";
        alert("Congratulations");
        document.getElementById("btn-rst").style.display= "block";
    }else if(total>21){
        document.getElementById("mainResult").innerHTML= "You Lost";
        document.getElementById("btn-rst").style.display= "block";
    }

    var img= document.createElement("img");
    img.src= "Images/"+ x + ".png";
    img.height= 300;

    document.body.appendChild(img);

}
}

function restart(){
    location.reload();
}
