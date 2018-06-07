const computeAverageLengthOfWords = (word1, word2) => {
  // your code here
  let wordSize1 = word1.length;
  let wordSize2 = word2.length;
  const result = (wordSize1 + wordSize2) / 2;
  
  return result;
}

  let output = computeAverageLengthOfWords ('code', 'programs');
  console.log(output);