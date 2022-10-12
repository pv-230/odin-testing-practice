const caesarCipher = (str) => {
  let newStr = '';
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char.match('[a-zA-Z]')) {
      let index = alphabet.indexOf(char.toLowerCase());
      if (++index > 25) index = 0;
      newStr = newStr.concat(
        char === char.toLowerCase()
          ? alphabet[index]
          : alphabet[index].toUpperCase()
      );
    } else {
      newStr = newStr.concat(char);
    }
  }

  return newStr;
};

module.exports = caesarCipher;
