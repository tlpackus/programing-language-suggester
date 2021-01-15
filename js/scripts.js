$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    console.log(name1Input);

    $(".name1").text(name1Input);

    $("#guru-speaks").show();
  });
});