function getAllVowels(string) {
    const vowels = ["A", "a", "E", "e", "O", "o", "И", "и", "І", "і"];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(string[i] === vowels[j]) {
            count++;
            }
        }
    }
return count;
}
