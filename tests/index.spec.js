const
  digitfy = require('..'),
  { resolve } = require('path'),
  { deepStrictEqual } = require('assert'),
  str = '--1+2.3e45fklq\t90.\n99-23.23e12mn  1b1 qdqek2 . 4 qkq -+12nqd1l12b.12.45-12e718bne09'
;

describe('String', () => {

  it('Should return all integers', function(end) {
    const res = digitfy.getInt(str);
    deepStrictEqual(res, [ -1, 2, 3, 45, 90, 99, -23, 23, 12, 1, 1, 2, 4, 12, 1, 12, 12, 45, -12, 718, 9]);
    end();
  });

  it('Should return all numbers', function(end) {
    const res = digitfy.getNum(str);
    deepStrictEqual(res, [ -1, 2.3, 45, 90, 99, -23.23, 12, 1, 1, 2, 4, 12, 1, 12, 12.45, -12e718, 9]);
    end();
  });

  it('should return all bin numbers', function(end) {
    const res = digitfy.getBin(str + '111uio011');
    deepStrictEqual(res, [-1, 0, 1, 1, 1, 1, 1, 1, 1, -1, 1, 0, 7, 3]);
    end();
  });

  it('should return all oct numbers', function(end) {
    const res = digitfy.getOct(str);
    deepStrictEqual(res, [-1, 2, 3, 37, 0, -19, 19, 10, 1, 1, 2, 4, 10, 1, 10, 10, 37, -10, 57, 0]);
    end();
  });

  it('should return all hex numbers', function(end) {
    const res = digitfy.getHex(str);
    deepStrictEqual(res, [ -1, 2, 255071, 144, 153, -35, 146962, 433, 13, 14, 2, 4, 18, 209, 299, 18, 69, -19820939, 3593]);
    end();
  });

  it('should return all unicode code points', function(end) {
    const res = digitfy.getUni('u+123434387helloboy erfe\t  U+FFEe108h')
    deepStrictEqual(res, ['U+123434', 'U+FFEE10']);
    end();
  });

});

describe('File', () => {
  const file = resolve('./tests/test.data');

  it('Should return all integers', function(end) {
    const res = digitfy.getIntF(file);
    deepStrictEqual(res, [ -1, 2, 3, 45, 90, 99, -23, 23, 12, 1, 1, 2, 4, 12, 1, 12, 12, 45, -12, 718, 9, 111110001, 11113301110, 3, 1001111, 0, 112330, 789]);
    end();
  });

  it('Should return all numbers', function(end) {
    const res = digitfy.getNumF(file);
    deepStrictEqual(res, [ -1, 2.3, 45, 90, 99, -23.23, 12, 1, 1, 2, 4, 12, 1, 12, 12.45, -12e718, 9, 111110001, 11113301110, 3, 1001111, 0, 112330, 789]);
    end();
  });

  it('should return all bin numbers', function(end) {
    const res = digitfy.getBinF(file);
    deepStrictEqual(res, [-1, 0, 1, 1, 1, 1, 1, 1, 1, -1, 1, 0, 497, 15, 14, 79, 0, 3, 0, 0]);
    end();
  });

  it('should return all oct numbers', function(end) {
    const res = digitfy.getOctF(file);
    deepStrictEqual(res, [-1, 2, 3, 37, 0, -19, 19, 10, 1, 1, 2, 4, 10, 1, 10, 10, 37, -10, 57, 0, 19173377, 1227719240, 3, 262729, 0, 38104, 7]);
    end();
  });

  it('should return all hex numbers', function(end) {
    const res = digitfy.getHexF(file);
    deepStrictEqual(res, [ -1, 2, 255071, 144, 153, -35, 146962, 433, 13, 14, 2, 4, 18, 209, 299, 18, 69, -19820939, 3593, 73300705310, 15, 239, 1172847989008, 223, 3, 13, 14, 16781585, 1123120, 1929]);
    end();
  });

  it('should return all unicode code points', function(end) {
    const res = digitfy.getUniF(file);
    deepStrictEqual(res, ['U+00789']);
    end();
  });
});
