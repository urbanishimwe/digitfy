# Digitfy
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/urbanishimwe/digitfy.svg?branch=master)](https://travis-ci.org/urbanishimwe/digitfy)

Digitfy extract numbers, integers, octals, binaries, hexadecimals and unicode code points from the file or string.

<pre>
               ***************
            **                ** 
            **                **
            **                **
            **                **
            **                **
            **                **
               ***************
            **                **
            **                **
            **                **
            **                **
            **                **
            **                **
            **                **
              ***************
</pre>

- ### GLOABLLY
```
npm install -g digitfy
```
**USAGE:**

help
```
digitfy --help
```

command
```
digitfy --file file1.txt -f file2.txt --str "string1" -s "string2" --num --int -o -x --hex
```
output
```
hex
...
...
num
...
...
int
...
... etc..
```


- ### AS A LIBRARY
```
npm i digitfy, yarn add digitfy
```

**USAGE:**

- *getInt* returns non-floating integers e.g. -1, 1, 100 ....
- *getNum* returns numbers e.g 1e-4, 1, 100, 100e12, 12,89
- *getBin* returns parsed binary numbers, e.g. "111 hello 011" will return [7, 3]
- *getOct* returns parsed octal numbers
- *getHex* returns parsed hexadecimal numbers
- *getUni* returns plain unicode code points e.g. U+12348

The syntax to extract from files
`[function]F(path_to_the_utf8_file)` e.g. getHexF("number.txt")

```
const 
  digit = require('digitfy'),
  str = "I have 0xc pancakes in my 14$ bag"
;

console.log(digit.getHex(str).concat(digit.getOct(str))) // [12, 12]
```

**Note:** the limit to parse non-decimal numbers(bin, oct, hex) is 64-bit largest int

## Contribution
```
🔥 fork this repository and raise a PR, or create an issue 🔥
```
