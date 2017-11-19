function cal(){
    var a=document.getElementById("firstNum").value;
    var b=document.getElementById("secondNum").value;
    var sig=document.getElementById("sig").value;
    a=parseFloat(a);
    b=parseFloat(b);
    if(sig=='+')
        document.getElementById("out").value=a+b;
    else if(sig=='-')
        document.getElementById("out").value=a-b;
    else if(sig=='*')
        document.getElementById("out").value=a*b;
    else if(sig=='/')
        document.getElementById("out").value=a/b;
}
function check1(){
    var a=document.getElementById("firstNum").value;
    var b=document.getElementById("secondNum").value;
    if(isNaN(a)||isNaN(b))//这里可以用函数IsNaN
        alert("Input error! Try again!");
}