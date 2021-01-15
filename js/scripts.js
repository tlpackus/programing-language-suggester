$(document).ready(function() {
  console.log("Script executing!");
  $("#formOne").submit(function() {
    event.preventDefault();
    console.log("Submit form successfully reached.");
    const nameInput = $("input#name1").val();

    $(".name1").text(nameInput);

    $("#guru-speaks").show();
  });
});