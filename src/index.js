function getAllVowels(string) {
    const vowels = ["А", "а", "Е", "е", "О", "о", "И", "и", "І", "і"];
    let count = 0;
    let str = string;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(string[i] === vowels[j]) {
            count++;
            }
        }
    }
return count;
}
