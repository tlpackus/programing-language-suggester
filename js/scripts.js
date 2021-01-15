$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const fromInput = $("input#from").val();
    const nameInput = $("input#name").val();
    const useInput = $("input#use").val();

    $(".name").text(nameInput);
    $(".from").text(fromInput);

    $("#guru-speaks").show();

    if (use === 'Entrepreneurial') {
      $(".lang2").addClass("highlightLang");
    } else if (use === 'Industrial') {
      $(".lang1").addClass("highlightLang");
    } else if (use === 'Fun') {
      $(".lang3").addClass("highlightLang");
    }
  });
});