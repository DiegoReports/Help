$(document).ready(function() {
  $(".hamburguer").click(function() {
    $(this).toggleClass("active");
    $(".navigation ").toggleClass("active");
  });
});