$(document).ready(function() {
  $("#submit").click(function() {
    var Question1 = parseInt($("input:radio[name=Question1]:checked").val());
    var Question2 = parseInt($("input:radio[name=Question2]:checked").val());
    var Question3 = parseInt($("input:radio[name=Question3]:checked").val());
    var Question4 = parseInt($("input:radio[name=Question4]:checked").val());
    var Question5 = parseInt($("input:radio[name=Question5]:checked").val());
    var Question6 = parseInt($("input:radio[name=Question6]:checked").val());
    var Question7 = parseInt($("input:radio[name=Question7]:checked").val());
    var result = (Question1 + Question2 + Question3 + Question4 + Question5 + Question6 + Question7);
    //document.getElementById("output").innerHTML = "you have scored" + result;
    alert(result);
  });
});
