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
});

//initialize material css carousel
$(document).ready(function(){
  var carousel = $('.carousel').carousel();
  // setInterval(function(){
  //   console.log('next called')
  //   n=0
  //   carousel.next(n)
  //   n++
  // }, 3000);
});
