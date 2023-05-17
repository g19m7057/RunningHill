const anagram = (string1, string2) => {
    // set to lower then split into array of chars
    let strArr1 = string1.toLowerCase().split('');
    let strArr2 = string2.toLowerCase().split('');

    // sort array of chars
    let sortArr1 = strArr1.sort();
    let sortArr2 = strArr2.sort();

    //join arrays into strings and compare
    return sortArr1.join('') === sortArr2.join('');

}


console.log(anagram('Army', 'Mary') ? "Army is an anagram with Mary." : "Army is not an anagram with.")
console.log(anagram('Sifiso', 'OsifiS') ? "Sifiso is an anagram with OsifiS." : "Sifiso is not an anagram with OsifiS.")
console.log(anagram('taBle', 'Tafel') ? "taBle is an anagram with Tafel." : "taBle is not an anagram with Tafel.")