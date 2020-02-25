function getAllVowels(string) {
    const vowels = ["A", "a", "E", "e", "O", "o", "И", "и", "І", "і"];
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            newString += string[i];
        }
    }
return newString.length;
}

