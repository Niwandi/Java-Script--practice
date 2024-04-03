let cYear;
let cMonth;
let cDay;
let cHour;
let cMin;
let cSec;
let cDaysLeft;
let daysPerYear;
let daysInFeb;

let interval= window.setInterval(function(){
    let cDate = new Date();  
    cHour= cDate.getHours();
    cMin= cDate.getMinutes();
    cSec= cDate.getSeconds();
    cDay= cDate.getDate();
    cMonth= cDate.getMonth()+1;
    cYear= cDate.getFullYear();

    if(cYear%4==0){
        daysPerYear= 366;
        daysInFeb= 29;
    }else{
        daysPerYear= 365;
        daysInFeb= 28;
    }

    switch(cMonth){
        case 1:
            cDaysLeft= daysPerYear;
            break;

        case 2:
            cDaysLeft= daysPerYear-31;
            
        case 3:
            cDaysLeft= daysPerYear-(31+daysInFeb);
            break;
            
        case 4:
            cDaysLeft= daysPerYear-(31+daysInFeb+31);
            break;
            
        case 5:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30);
            break;

        case 6:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31);
            break;

        case 7:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31+30);
            break;

        case 8:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31+30+31);
            break;

        case 9:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31+30+31+31);
            break;

        case 10:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31+30+31+31+30);
            break;

        case 11:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31+30+31+31+30+31);
            break;

        case 12:
            cDaysLeft= daysPerYear-(31+daysInFeb+31+30+31+30+31+31+30+31+30);
            break;

    }

    document.getElementById('seconds').innerHTML= 60-cSec;
    document.getElementById('minutes').innerHTML= 60- cMin
    document.getElementById('hours').innerHTML= 24- cHour;
    document.getElementById('days').innerHTML= cDaysLeft- cDay;
} , 1000);
