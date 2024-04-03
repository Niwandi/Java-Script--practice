function validation(){
    let phone= document.getElementById("phone").value;
    let numLength= phone.length;
    let firstNums= phone.substr(0,2);
    let lastNums= phone.substr(numLength-9, 9);
    let num;

    if(numLength < 9){
        alert ("Numbers missing");
        document.getElementById("msg").innerHTML= "Invalid input";
    }else if(numLength==9){
        alert ("successfull");
        num= "94"+phone;
        document.getElementById("msg").innerHTML= num;
    }else if(numLength==10){
        alert ("successfull");
        num= "94"+ lastNums;
        document.getElementById("msg").innerHTML= num;
    }else if(numLength>11){
        alert ("invalid");
        document.getElementById("msg").innerHTML= "Invalid input";
    }else if(numLength>11 && firstNums != 94){
        alert ("invalid");
        document.getElementById("msg").innerHTML= "Invalid input";
    }else if(numLength== 11 && firstNums == 94){
        alert ("successfull");
        num= phone;
    }
}