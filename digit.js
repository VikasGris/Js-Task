function digital_root() {
    var n = document.getElementById("val").value;
    console.log(n)
    var digits = n.toString().split("").map(Number);
    console.log(digits)
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    var sumString = sum.toString();
    if (sumString.length > 1) {
      var sumDigits = sumString.split("").map(Number);
      var firstSumDigit = sumDigits.slice(0);
      var lastSumDigit = sumDigits.slice(-1);
      return firstSumDigit[0] + lastSumDigit[0];
    } else {
        document.getElementById("result").innerHTML = "The value of digital_root is "+sum;
        
    }
  }