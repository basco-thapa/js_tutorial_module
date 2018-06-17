/* Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}
*/
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}
/* Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
*/
// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  /* Exercises 7.2
  this.processor = function(string) {
    return this.content.toLowerCase();
  }
  */
  /* Exercises 7.2
  this.processedContent = function() {
    return this.processor(this.contetnt);
  }
  */
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  /* Exercises 7.2
  this.palindrome = function() {
    return this.processedContent() === reverse(this.processedContent());
  }
  */
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  /* Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
  */
  /* Exercises 7.1 Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  }
  */
}

/* Defines a translated Phrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Exercises 7.2
  this.processedContent = function() {
    return this.processor(this.translation);
  }

  // Returns translation proccessed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }

}

TranslatedPhrase.prototype = new Phrase();
*/

/* Exercises 7.3
String.prototype.blank = function() {
  if (this.match(/^\s+$/g) || this.match(/^$/)) {
    return true;
  } else {
    return false;
  }
}

Array.prototype.last = function() {
 //return this.slice(-1)[0];
 return this[this.length-1];
}
*/
