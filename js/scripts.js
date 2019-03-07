// Business Logic

var vowels = ["a","e","i","o","u"];

var pigLatin = function(word) {
  for(var i = 0; i < vowels.length; i++){
    if (word.toLowerCase().startsWith(vowels[i])) {
      return  word + "way"
    }
  }
  if (word.toLowerCase().startsWith("qu")){
    var firstTwoLetters = word.slice(0,2);
    var newWord1 = word.slice(2) + firstTwoLetters + "ay";
    return newWord1;
  } else {
    var firstLetter = word.slice(0, 1);
    var newWord = word.slice(1) + firstLetter + "ay";
    return newWord;
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
