const MORSE_TABLE = {
    '1011': 'a',
    '11101010': 'b',
    '11101110': 'c',
    '111010': 'd',
    '10': 'e',
    '10101110': 'f',
    '111110': 'g',
    '10101010': 'h',
    '1010': 'i',
    '10111111': 'j',
    '111011': 'k',
    '10111010': 'l',
    '1111': 'm',
    '1110': 'n',
    '111111': 'o',
    '10111110': 'p',
    '11111011': 'q',
    '101110': 'r',
    '101010': 's',
    '11': 't',
    '101011': 'u',
    '10101011': 'v',
    '101111': 'w',
    '11101011': 'x',
    '11101111': 'y',
    '11111010': 'z',
    '1011111111': '1',
    '1010111111': '2',
    '1010101111': '3',
    '1010101011': '4',
    '1010101010': '5',
    '1110101010': '6',
    '1111101010': '7',
    '1111111010': '8',
    '1111111110': '9',
    '1111111111': '0',
    '**********': ' ',
};

function decode(expr) {
    let final = [];
    let str = expr.match(/.{1,10}/g);
    for (let i = 0; i < str.length; i++) {
        let letter = MORSE_TABLE[str[i]] || MORSE_TABLE[str[i].slice(2)] || MORSE_TABLE[str[i].slice(4)]
            || MORSE_TABLE[str[i].slice(6)] || MORSE_TABLE[str[i].slice(8)];
        final.push(letter);
    }
    let finalStr = final.join("");
    return finalStr;
}

module.exports = {
    decode
}