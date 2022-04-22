const transposeArray = (letters) => {
  let verticalJoinArray = [];
  for (let r = 0; r < letters[0].length; r++) {
    let otherResult = [];
    for (let c = 0; c < letters.length; c++) {
      otherResult.push(letters[c][r]);
         
    }
    verticalJoinArray.push(otherResult);
  }
  return verticalJoinArray;
};

const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return false;
  }
    
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  const verticalJoin = transposeArray(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  return false;
};



module.exports = wordSearch;

