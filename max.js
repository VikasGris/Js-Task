function max(){
    var a = document.getElementById("val1").value;
    var b = document.getElementById("val2").value;
    console.log(a,b);
    if(a > b){
        document.getElementById("max").innerHTML = "The largest value is " + a;
    }
    else if (a == b){
        document.getElementById("max").innerHTML = "The  value a and b is equal";

    }
    else{
        document.getElementById("max").innerHTML = "The largest value is " + b;

    }
}