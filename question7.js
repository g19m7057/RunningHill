const decrypt = (string) => {
  const alphabetLowerCase = [];

  //create alphabet from ascii code
  for (let i = 97; i <= 122; i++) {
    alphabetLowerCase.push(String.fromCharCode(i));
  }
  let strArr = string.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (alphabetLowerCase.includes(strArr[i])) {
      let element1 = alphabetLowerCase.indexOf(strArr[i]);
      strArr[i] = alphabetLowerCase[25 - element1];
    }
  }
  return strArr.join("");
};

console.log(decrypt("Drw blf hvv ozhg mrtsg'h vkrhlwv?"));
console.log(
  decrypt("Yvzs! I xzm'g yvorvev Lzmxv olhg srh qly zg gsv xlolmb!!")
);
