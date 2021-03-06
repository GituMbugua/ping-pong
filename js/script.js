function pingPong(number) {
  var empty = [];

  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      empty.push('Ping Pong')
    } else if (i % 3 === 0) {
      empty.push('Ping');
    } else if (i % 5 === 0) {
      empty.push('Pong')
    } else {
      empty.push(i);
    }
  }
  console.log(empty);
  return empty;
}


$(document).ready(function() {
  $("form#submit").submit(function(event) {
    event.preventDefault();
    var number = $("input#userNumber").val();
    $(".results").text(" ");
    var result = pingPong(number);

    $(".results").append('<ul>');

    result.forEach(function(newNumber) {
      $(".results").append('<li>' + newNumber + '</li>')
    })
    $(".results").append('</ul>')
  });
});
