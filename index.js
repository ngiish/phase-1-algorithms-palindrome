function isPalindrome(word) {
  // Write your algorithm here
  const wordArray =word.split("");
  const reverseWordArray = wordArray.reverse();
  const reverseWord = reverseWordArray.join("");
  if(reverseWord === word){
    return true;
  }
  return false;
}

/* 
//   Add your pseudocode here
// */
// In the algorithm we first use the .split method in order to separate each letter of the strings to be tested
// The next thing is to use the reverse method in order to rearrange the letters of the concerned word in the words
// After that the thing that follows is touse the .join method to put the individual letters of the reversed word together
// IF is used to check whether the word is a palindrome by checking whether the reversed word is the same as the initial word

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: false")
  console.log("=>", isPalindrome("ab"))

  console.log("")

  console.log("Expecting: true")
  console.log("=>", isPalindrome("abba"))
}

module.exports = isPalindrome;
