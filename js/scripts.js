// Business Logic

var vowels = ["a","e","i","o","u"];

var pigLatin = function(word) {
  for(var i = 0; i < vowels.length; i++){
    if (word.toLowerCase().startsWith(vowels[i])) {
      return  word + "way"
    }
  }



};



// User Interface Logic

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
      event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);

    $("#output").text(result);
  });
});
