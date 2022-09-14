const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let a = startWord;
  let b = word;
  if(word == null || word == undefined ){
    return undefined;
  }else if(b.startsWith(a)){   //หรือใช้ startsWith //includes.
    return b;
  }else {
    return a+b;
  }
}
module.exports = fillStartWord

// function fillStartWord(startWord, word) {
//   let fullWord;
//   if (word == null||word == undefined) {
//       fullWord = undefined;
//       return fullWord;
//   } else if (startWord === word.substr(0, startWord.length)) {
//       fullword = word;
//       return fullword;
//   }
//   else {
//       fullWord = startWord + word;
//       return fullWord;
//   }
// }

