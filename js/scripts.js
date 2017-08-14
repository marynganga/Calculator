//BUSINESS OR NACK-END LOGIC
var add = function(number1, number2) {
  return number1 + number2;
};

var minus = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//USER-INTERFACE OR FRONT-END LOGIC
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());

    var addresult = add(number1, number2);
    alert(addresult);

    /*
      var minusresult = minus(number1, number2);
      alert(minusresult);

      var multiplyresult = multiply(number1, number2);
      alert(multiplyresult);

      var divideresult = divide(number1, number2);
      alert(divideresult);
*/
  });
});
