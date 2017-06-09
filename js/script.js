$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();

    var number = $("input#userNumber").val();
    var result = pingPong(number);
    $("div#result").text(result);
  });
});

var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {

    if (i % 15 === 0) {
      $('#list').append('<li>' + "Ping-Pong" + '</li>');
    } else if (i % 3 === 0) {
      $('#list').append('<li>' + "Ping" + '</li>');
    } else if (i % 5 === 0) {
      $('#list').append('<li>' + "Pong" + '</li>');
    } else {
      $('#list').append('<li>' + i + '</li>');
    }
  }
}
