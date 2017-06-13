$("button").click(function(){
  var value = $(this).text();
  var numeral = /([0-9])/;
  var operator = /([+-x/])/;
  var equals = /([=])/;
  var currentvalue = $("#current").text();
    if(value.match(numeral) ){
      $("#current").append(value);
    }
    else if (value.match(operator) ){
      localStorage.setItem('firstvalue', currentvalue);
      $("#current").text(value);
      console.log(localStorage);
    }
  // else if (value.match(equals)) {
  //
  // }


});
