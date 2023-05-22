const stats = (statsNumberList) => {
  let sortedArr = statsNumberList.sort();
  let median = sortedArr[sortedArr.length / 2];
  let highestNumber = sortedArr[sortedArr.length - 1];
  let lowestNumber = sortedArr[0];

  let list = {};
  let maximum = 0,
    mode;
  let modes = [];

  sortedArr.forEach((element) => {
    if (list[element]) {
      list[element]++;
    } else {
      list[element] = 1;
    }
    if (list[element] > maximum) {
      maximum = list[element];
      mode = element;
    }
  });

  //look for others with the same occurence to mode
  for (element in list) {
    if (list[mode] === list[element]) {
      modes.push(element);
    }
  }
  modes = modes.join(", ");
  return { median, highestNumber, lowestNumber, modes };
};

console.log(stats([1, 4, 3, 4, 5, 7, 7, 8, 9, 10]));
