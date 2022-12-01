// PROMPT
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.


// OICE EXERCISE
// O: a boolean representing if the 1st half of a word contains the same number of vowels as the 2nd half
// I: a string (of an even length)
// C: uppercase and lowercase should not matter, input is even length
// E: n/a



var halvesAreAlike = function(s) {

  s = s.toLowerCase();

  var a = s.slice(0, s.length/2)
  var b = s.slice((s.length/2))

  var aVowels = 0;
  var bVowels = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] === 'a' ||
       a[i] === 'e' ||
       a[i] === 'i' ||
       a[i] === 'o' ||
       a[i] === 'u') {
        aVowels++
       }

    if (b[i] === 'a' ||
       b[i] === 'e' ||
       b[i] === 'i' ||
       b[i] === 'o' ||
       b[i] === 'u') {
        bVowels++
       }
  }

  return aVowels === bVowels

};

module.exports = halvesAreAlike;