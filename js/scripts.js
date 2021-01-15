$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const fromInput = $("input#from").val();
    const nameInput = $("input#name").val();
    const use = parseInt($("#use").val());

    if (useInput = 1) {
      $(".langJ").addClass("highlightLang");
    } else if (useInput = 2) {
      $(".langR").addClass("highlightLang");
    } else if (useInput = 3) {
      $(".langP").addClass("highlightLang");
    }

    $(".name").text(nameInput);
    $(".from").text(fromInput);

    $("#guru-speaks").show();
  });
});