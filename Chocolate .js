function chocolateBar(){
    var n = document.getElementById("val1").value;
    var m = document.getElementById("val2").value;
    console.log(n,m)
    if((n>1 && m>1) || (n>1 && m==1) || (n==1 && m>1))
      
      document.getElementById("result").innerHTML = m*n-1 +" number of breaks needed to break the Chocolate";
    else 
      return document.getElementById("result").innerHTML = "No breaks needed";
}
