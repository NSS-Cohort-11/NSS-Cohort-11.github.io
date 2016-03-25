//Top Scroll Function
$(document).ready(function () {
  var message = "Nashville Software School Cohort 11";
  var top = document.getElementsByClassName("scrollText")[0];
  var time = 500;

  message.split("").forEach(function(char) {
    setTimeout(function() {
    top.innerHTML += char;
    }, time += 200);
  });

  //initialize material css carousel
  var carousel = $('.carousel').carousel();

  // Click function to flip student cards; adds and removes 'flipped' class
  (function() {
    var cards = document.querySelectorAll(".flipper");
    for ( var i  = 0, len = cards.length; i < len; i++ ) {
      var card = cards[i];
      clickListener( card );
    }

    function clickListener(card) {
      card.addEventListener( "click", function() {
        var c = this.classList;
        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      });
    }
  })();

});
