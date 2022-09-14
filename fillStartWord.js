//const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let a = startWord;
  let b = word;
  if(word == null || word == undefined ){
    return undefined;
  }else if(b.startsWith(a)){ //หรือใช้ startsWith .
    return b;
  }else {
    return a+b;
  }
}
//module.exports = fillStartWord
console.log(fillStartWord("first","firststep"));

