const duplicateNumber = (array) => {
  let list = {};
  let duplicates = [];

  // store the number of times an element appears in a list object
  // key is element value is the number of times it appears

  // if element appears more than once put in duplicates array
  array.forEach((element) => {
    if (list[element]) {
      list[element]++;
    } else {
      list[element] = 1;
    }
    if (list[element] > 1 && !duplicates.includes(element)) {
      duplicates.push(element);
    }
  });
  return duplicates.join(", ");
};

console.log(
  `The duplicate numbers are ${duplicateNumber([
    1, 4, 3, 4, 5, 7, 7, 8, 9, 10,
  ])}`
);
console.log(
  `The duplicate numbers are ${duplicateNumber([
    1, 4, 4, 8, 8, 8, 8, 9, 10, 11, 12, 12, 13,
  ])}`
);
