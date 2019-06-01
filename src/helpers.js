const REGEXES = {
    getNumber: /[-\+]{0,1}\d+\.{0,1}\d*/g,
    getInt: /[-\+]{0,1}\d+/g,
    getFloor: /[-\+]{0,1}\d+\.\d+/g,
    getExponential: /[-\+]{0,1}\d+\.{0,1}e[-\+]{0,1}\d+/g,
    getNumberNegative: /-\d+\.{0,1}\d*/g,
    getNumberPositive: /\+\d+\.{0,1}\d*/g,
    getIntNegative: /-\d+/g,
    getIntNegative: /\+\d+/g,
    getFloorNegative: /-\d+\.\d+/g,
    getFloorPostive: /\+\d+\.\d+/g,
    getExponentialNegative: /-\d+\.{0,1}e[-\+]{0,1}\d+/g,
    getExponentialPositive: /\+{0,1}\d+\.{0,1}e[-\+]{0,1}\d+/g,
};

export default REGEXES;
