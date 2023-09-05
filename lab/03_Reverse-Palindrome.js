function reverse_fun(){
    let a=document.getElementById("reverse").value;
    let a1=a.split("");
    let a2=a1.reverse();
    let rev=a2.join("");
    document.getElementById("reverse_out").innerHTML="Reverse String: "+rev;
}

function replace_fun(){
    let a=document.getElementById("string").value;
    let t=document.getElementById("target").value;
    let r=document.getElementById("replace").value;
    let result=a.replaceAll(t,r);
    document.getElementById("replace_out").innerHTML="Replaced String: "+result;
}

function palindrome_fun(){
    let a=document.getElementById("palindrome").value;
    let a1=a.split("");
    let a2=a1.reverse();
    let rev=a2.join("");
    let result;
    if(a===rev){
    result="True"; }
    else{
    result="False"; }
    document.getElementById("palindrome_out").innerHTML="String is Palindrome:  "+result;
}