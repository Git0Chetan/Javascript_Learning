function check_fun1(){
    let a=document.getElementById("Math1").value;
    let b=document.getElementById("Math2").value;

    let d=a==b;
    if(d){
        document.getElementById("Math_out").innerHTML="Result: Equal";
    }
    else{
    let c=b<a;
    if(c==0){
        document.getElementById("Math_out").innerHTML="Result: String 2 is greater";
    }
    else{
        document.getElementById("Math_out").innerHTML="Result: String 1 is greater";
    }
    }
    
}

function check_fun2(){
    let a=document.getElementById("Strict_E1").value;
    let b=document.getElementById("Strict_E2").value;
    let c=b===a;
    document.getElementById("Strict_E_out").innerHTML="Result: "+c;
}

function check_fun3(){
    let a=document.getElementById("Match1").value;
    let b=document.getElementById("Match2").value;
    let c=a.match(b);
    document.getElementById("Match_out").innerHTML="Result: "+c;
}

function check_fun4(){
    let a=document.getElementById("Local_C1").value;
    let b=document.getElementById("Local_C2").value;
    let c=a.localeCompare(b);
    document.getElementById("Local_C_out").innerHTML="Result: "+c;
}

function check_fun5(){
    let a=document.getElementById("Matchall1").value;
    let b=document.getElementById("Matchall2").value;
    let c=[];
    for(let i=0;i<a;i++){
    c[i]=a.matchAll(b[i]);
    }
    document.getElementById("Matchall_out").innerHTML="Result: "+c; 
}