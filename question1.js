// returns every second element in the string starting from the end
const splitString = (string) => {
    let str = '';
    string = string.split(' ');

    for(var i = string.length-1; i >= 0; i-=2){
        str += string[i];
        str += ' ';
    }
    return str.toLowerCase();
}

console.log(splitString('Yash is a javascript ninja'));