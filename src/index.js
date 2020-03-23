const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const array = expr.match(/.{1,10}/g);
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] == '**********') {
            array[i] = '++';
        } else {
            array[i] = parseInt(array[i]).toString();
        }

        array[i] = array[i].match(/.{1,2}/g);
        for(let j = 0; j < array[i].length; j++) {
            switch(array[i][j]) {
                case '10': array[i][j] = '.'; break;
                case '11': array[i][j] = '-'; break;
                case '++': array[i][j] = ' '; break;
            }
        }
        if(array[i].join('') != ' ') array[i] = MORSE_TABLE[array[i].join('')];
    }
    
    return array.join('');
}

module.exports = {
    decode
}