

let num= parseInt(window.prompt("Escribe un número"));

if(num<100){

    document.getElementById("div1").style.color="green";
    document.getElementById("div1").innerHTML=`${num}`;


} else if(num>100 && num<200){
    document.getElementById("div1").style.color="yellow";
    document.getElementById("div1").innerHTML=`${num}`;


} else {
    document.getElementById("div1").style.color="red";
    document.getElementById("div1").innerHTML=`${num}`;

}