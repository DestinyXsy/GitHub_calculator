var a, c, re, i = 1, j = 0;
a = "";
function first() {

    if (j == 0) {
        a+="1";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="1";
        document.getElementById("second").innerHTML = a;
    }
}

function second() {
    
    if (j == 0) {
        a+="2";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="2";
        document.getElementById("second").innerHTML = a;
    }
}

function third() {

    if (j == 0) {
        a+="3";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="3";
        document.getElementById("second").innerHTML = a;
    }
}

function fourth() {

    if (j == 0) {
        a+="4";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="4";
        document.getElementById("second").innerHTML = a;
    }
}

function fifth() {
    
    if (j == 0) {
        a+="5";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="5";
        document.getElementById("second").innerHTML = a;
    }
}

function sixth() {
    
    if (j == 0) {
        a+="6";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="6";
        document.getElementById("second").innerHTML = a;
    }

}

function seventh() {
   
    if (j == 0) {
        a+="7";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="7";
        document.getElementById("second").innerHTML = a;
    }

}

function eighth() {
    
    if (j == 0) {
        a+="8";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="8";
        document.getElementById("second").innerHTML = a;
    }

}

function nineth() {
    
    if (j == 0) {
        a+="9";
        document.getElementById("first").innerHTML = a;
    }
    else {
        a+="9";
        document.getElementById("second").innerHTML = a;
    }

}

function zero() {

    if (j == 0 && a != "0") {
        a+="0";
        document.getElementById("first").innerHTML = a;
    }
    else if (a != "0") {
        a+="0";
        document.getElementById("second").innerHTML = a;
    }

}



function adds() {
    a = "+";
    document.getElementById("signed").innerHTML = a;
    j++;
    a="";
}

function divs() {
    a = "-";
    document.getElementById("signed").innerHTML = a;
    j++;
    a="";
}

function multis() {
    a = "*";
    document.getElementById("signed").innerHTML = a;
    j++;
    a="";
}

function diffs() {
    a = "/";
    document.getElementById("signed").innerHTML = a;
    j++;
    a="";
}

function equs() {
    var num1, num2, num3;
    num1 = document.getElementById("first").innerHTML;
    num2 = document.getElementById("second").innerHTML;
    num3 = document.getElementById("signed").innerHTML;
    document.getElementById("first").innerHTML="";
    document.getElementById("second").innerHTML="";
    document.getElementById("signed").innerHTML="";
    document.getElementById("result").innerHTML="";
    if (num1!="" && num2!="")
    {
        if (num3 == "+") {
            document.getElementById("first").innerHTML = Number(num1) + Number(num2);
        }
        else if (num3 == "-") {
            document.getElementById("first").innerHTML = num1 - num2;
        }
        else if (num3 == "*") {
            document.getElementById("first").innerHTML = num1 * num2;
        }
        else {
            document.getElementById("first").innerHTML = num1 / num2;
        }
    }
    else
    {
        document.getElementById("result").innerHTML="无第二操作数，请从头再来!";
    }
    
}

function final_clear()
{
    document.getElementById("first").innerHTML="";
    document.getElementById("second").innerHTML="";
    document.getElementById("signed").innerHTML="";
    document.getElementById("result").innerHTML="";
    a="";
    j=0;
}