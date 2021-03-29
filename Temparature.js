function fahrenheit() {
    const celsius = prompt("Enter a celsius value: ");
    const fahrenheit = (celsius * 1.8) + 32
    document.getElementById("result").innerHTML = celsius + "\xB0C is " + fahrenheit + " \xB0F.";
  }
  function celsius() {
    const fahrenheit = prompt("Enter a fahrenheit value: ");
    const celsius = (fahrenheit - 32) / 1.8
    document.getElementById("result1").innerHTML = fahrenheit + "\xB0F is " + celsius + " \xB0F.";
  }