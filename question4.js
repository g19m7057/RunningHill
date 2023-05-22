const missingNumber = (array) => {
  // create an array with no number missing
  let fullArr = [];
  const arrMin = Math.min(...array);
  const arrMax = Math.max(...array);

  for (var i = arrMin; i < arrMax + 1; i++) {
    fullArr.push(i);
  }

  let missingNumbers = [];
  // find missing by comparing the two arrays
  let y = 0;
  for (let j = 0; j < fullArr.length; j++) {
    if (fullArr[j] !== array[y]) {
      missingNumbers.push(fullArr[j]);
    } else {
      y++;
    }
  }
  return missingNumbers.join(", ");
};

console.log(
  `The missing numbers are ${missingNumber([1, 2, 4, 5, 6, 7, 9, 10])}`
);
