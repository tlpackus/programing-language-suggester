$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const fromInput = $("input#from").val();
    const nameInput = $("input#name").val();
    const daysInput = parseInt($("input#days").val());

    if (daysInput >= 20) {
      $(".langR").addClass("highlightLang");
      $(".langP").removeClass("highlightLang");
      $(".langJ").removeClass("highlightLang");
    } else if (daysInput >= 10) {
      $(".langP").addClass("highlightLang");
      $(".langJ").removeClass("highlightLang");
      $(".langR").removeClass("highlightLang");
    } else {
      $(".langJ").addClass("highlightLang");
      $(".langR").removeClass("highlightLang");
      $(".langP").removeClass("highlightLang");

    }

    $(".name").text(nameInput);
    $(".from").text(fromInput);

    $("#guru-speaks").show();
  });
});