$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const fromInput = $("input#from").val();
    const nameInput = $("input#name").val();
    const useInput = parseInt($("input:radio[name=use]:checked").val());

    if (useInput = 2) {
      $(".langR").addClass("highlightLang");
    } else if (useInput < 2) {
      $(".langJ").addClass("highlightLang");
    } else if (useInput > 2) {
      $(".langP").addClass("highlightLang");
    }

    $(".name").text(nameInput);
    $(".from").text(fromInput);

    $("#guru-speaks").show();
  });
});