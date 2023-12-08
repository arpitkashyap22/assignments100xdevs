/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if(str1.length != str2.length){
    return false;
  }

  let count1 = new Array(256);
  let count2 = new Array(256);

  for (let index = 0; index < 256; index++) {
    count1[index] = 0;
    count2[index] = 0;
    
  }

  for(let i = 0; i<str1.length && i<str2.length; i++){
    count1[str1[i].charCodeAt(0)]++;
    count2[str2[i].charCodeAt(0)]++;
  }


  for (let index = 0; index < 256; index++) {
    if(count1[index] != count2[index]){
      return false;
    }
    
  }

  return true;
}



module.exports = isAnagram;
