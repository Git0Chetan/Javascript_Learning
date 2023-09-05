
// function compute(){
//     var a=document.getElementById("A").value;
//     var calculate=[];
//     for(let i=1;i<=10;i++){
//         calculate[i-1]= "<br>" + a + " x " + i + "=" + a*i ; 
//     }
//     document.getElementById("display").innerHTML += calculate;
// }


function compute(){
    var a=document.getElementById("A").value;
    var calculate;
    for(let i=1;i<=10;i++){
        calculate= "<br>" + a + " x " + i + "=" + a*i ; 
        document.getElementById("display").innerHTML += calculate;
    }
    
}