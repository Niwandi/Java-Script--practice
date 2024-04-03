if(localStorage.getItem('count')==0){
    document.getElementById('results').innerHTML= "0";
}else{
    document.getElementById('results').innerHTML= localStorage.getItem('count');
}
function add(){
    let count= parseInt(document.getElementById('results').innerHTML);
    document.getElementById('results').innerHTML= count + 1;
    localStorage.setItem('count', count+1);
}
function sub(){
    let count= parseInt(document.getElementById('results').innerHTML);
    document.getElementById('results').innerHTML= count - 1;
    localStorage.setItem('count', count-1);
}