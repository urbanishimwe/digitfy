#!/usr/bin/env node
'use strict';

const
  { existsSync, readFileSync } = require('fs'),
  NOT_EXISTS = ' does not exists',
  INT = /[-\+]?\d+/g,
  NUMBER = /[-\+]?\d+((\.|e[-\+]?)\d+)?/g,
  BIN = /[-\+]?[01]+/g,
  OCT = /[-\+]?[0-7]{1,22}/g,
  HEX = /[-\+]?(0x)?(\d|[A-F]){1,16}/gi,
  UNI = /U\+(\d|[A-F]){4,6}/gi,
  CMD = {
    file: [],
    str: [],
    hex: false,
    oct: false,
    bin: false,
    uni: false,
    num: false,
    int: false,
    uni: false,
  },
  USAGE = `
 --------------------------------------------
     WELCOME TO THE COMMANDLINE OF DIGITFY
 --------------------------------------------
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

Digitfy extract numbers, integers, octals, binaries, hexadecimals
and unicode code points from the file or string.

USAGE:
 -h, --help: to show this usage
 -f, --file: [file]: to read from the file
 -s, --str: [string]: to read from the plain string
 -n, --num: extract numbers
 -o, --oct: extract octals
 -x, --hex: extract hexadecimals
 -b, --bin: extract binaries
 -u, --uni: extract unicode code points
 -i, --int: extract integers

e.g: digitfy -f file1.txt -s "I'm I'm gong to buy 12 cups with 0x56fe$" -x -o -n

specify multiple input, digitfy -f file1 -f file2 --file file3 --str string1 .... --hex --num -i
`
;

function matcher(s, reg, parser) {
  if (typeof s !== 'string') {
    return [];
  }
  const mtch = s.match(reg);
  return mtch ? mtch.map(e => parser(e)) : [];
}

const Digitfy = {
  getInt: function(s) {
    return matcher(s, INT, function(e) {
      return parseInt(e, 10);
    });
  },

  getNum: function(s) {
    return matcher(s, NUMBER, parseFloat);
  },

  getBin: function(s) {
    return matcher(s, BIN, function(e) {
      return parseInt(e, 2);
    })
  },

  getOct: function(s) {
    return matcher(s, OCT, function(e) {
      return parseInt(e, 8);
    })
  },

  getHex: function(s) {
    return matcher(s, HEX, function(e) {
      return parseInt(e, 16);
    })
  },

  getUni: function(s) {
    return matcher(s, UNI, function(e) {
      return e.toUpperCase();
    })
  },

  getIntF: function(f) {
    if (!existsSync(f)) {
      throw f + NOT_EXISTS;
    }
    return this.getInt(readFileSync(f, { autoClose: true, encoding: 'utf8' }));
  },

  getNumF: function(f) {
    if (!existsSync(f)) {
      throw f + NOT_EXISTS;
    }
    return this.getNum(readFileSync(f, { autoClose: true, encoding: 'utf8' }));
  },

  getBinF: function(f) {
    if (!existsSync(f)) {
      throw f + NOT_EXISTS;
    }
    return this.getBin(readFileSync(f, { autoClose: true, encoding: 'utf8' }));
  },

  getOctF: function(f) {
    if (!existsSync(f)) {
      throw f + NOT_EXISTS;
    }
    return this.getOct(readFileSync(f, { autoClose: true, encoding: 'utf8' }));
  },

  getHexF: function(f) {
    if (!existsSync(f)) {
      throw f + NOT_EXISTS;
    }
    return this.getHex(readFileSync(f, { autoClose: true, encoding: 'utf8' }));
  },

  getUniF: function(f) {
    if (!existsSync(f)) {
      throw f + NOT_EXISTS;
    }
    return this.getUni(readFileSync(f, { autoClose: true, encoding: 'utf8' }));
  }
}

module.exports = Digitfy;


// THE FOLLOWING PART IS ONLY USED IN COMMAND LINE
if (module && !module.parent) {
  const args = process.argv.slice(2);
  if (args.length !== 0) {
    if (args.indexOf('-h') + args.indexOf('--help') >= 0) {
      console.log(USAGE);
      process.exit(0);
    }
    for (let cmd = 0; cmd < args.length; cmd++) {
      const c = args[cmd];
      if (c === '-o' || c === '--oct' ) {
        CMD.oct = true;
      }
      if (c === '-x' || c === '--hex' ) {
        CMD.hex = true;
      }
      if (c === '-n' || c === '--num' ) {
        CMD.num = true;
      }
      if (c === '-b' || c === '--bin' ) {
        CMD.bin = true;
      }
      if (c === '-i' || c === '--int' ) {
        CMD.int = true;
      }
      if (c === '-u' || c === '--uni' ) {
        CMD.uni = true;
      }
      if (c === '-f' || c === '--file') {
        const file = args[cmd + 1];
        if (CMD.file.indexOf(file) === -1) {
          CMD.file.push(file);
        }
        if(!existsSync(file)) {
          throw new Error("parse error: ", file, " not found!");
        }
        cmd++;
      }
      if (c === '-s' || c === '--str') {
        const str = args[cmd + 1];
        if (!str) {
          throw new Error("parse error after ", c);
        }
        CMD.str.push(str);
        cmd++;
      }
    }
    command();
  } else {
    console.log(USAGE);
  }
}

function command() {
  // Extracting from files
  const out = {
    hex: [],
    oct: [],
    bin: [],
    uni: [],
    int: [],
    num: [],
  };
  for(let f of CMD.file) {
    if (CMD.hex) {
      Digitfy.getHexF(f).forEach(function(e) {
        out.hex.push(e);
      });
    }
    if (CMD.oct) {
      Digitfy.getOctF(f).forEach(function(e) {
        out.oct.push(e);
      });
    }
    if (CMD.bin) {
      Digitfy.getBinF(f).forEach(function(e) {
        out.bin.push(e);
      });
    }
    if (CMD.int) {
      Digitfy.getIntF(f).forEach(function(e) {
        out.int.push(e);
      });
    }
    if (CMD.num) {
      Digitfy.getNumF(f).forEach(function(e) {
        out.num.push(e);
      });
    }
    if (CMD.uni) {
      Digitfy.getUniF(f).forEach(function(e) {
        out.uni.push(e);
      });
    }
  }

  // Extracting from strings
  for(let s of CMD.str) {
    if (CMD.hex) {
      Digitfy.getHex(s).forEach(function(e) {
        out.hex.push(e);
      });
    }
    if (CMD.oct) {
      Digitfy.getOct(s).forEach(function(e) {
        out.oct.push(e);
      });
    }
    if (CMD.bin) {
      Digitfy.getBin(s).forEach(function(e) {
        out.bin.push(e);
      });
    }
    if (CMD.int) {
      Digitfy.getInt(s).forEach(function(e) {
        out.int.push(e);
      });
    }
    if (CMD.num) {
      Digitfy.getNum(s).forEach(function(e) {
        out.num.push(e);
      });
    }
    if (CMD.uni) {
      Digitfy.getUni(s).forEach(function(e) {
        out.uni.push(e);
      });
    }
  }

  // Printing extracted elements
  for(let k of Object.keys(out)) {
    if (out[k].length !== 0) {
      console.log(k + ":");
      out[k].forEach(e => console.log(e));
    }
  }
}