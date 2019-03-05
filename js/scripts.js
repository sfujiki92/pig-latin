// Business Logic

var vowels = ["a","e","i","o","u"];

var pigLatin = function(word) {
  if (word.startsWith(vowels)) {
    return "test";//+ "way"
  } else {
    return "No";
 }
};



// User Interface Logic

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
      event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);



  //  $(".word").text(word);

  //  if (!result) {          //same as writing if (result === false)
//      $(".not").text("not");
//   } else {
//      $(".not").text("");
//    }

    $("#output").text(result);


  });


});
