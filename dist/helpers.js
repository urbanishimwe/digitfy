"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var REGEXES = {
  getNumber: /[-\+]{0,1}\d+\.{0,1}\d*/g,
  getInt: /[-\+]{0,1}\d+/g,
  getFloor: /[-\+]{0,1}\d+\.\d+/g,
  getExponential: /[-\+]{0,1}\d+\.{0,1}\d*e[-\+]{0,1}\d+/g,
  getNumberNegative: /-\d+\.{0,1}\d*/g,
  getNumberPositive: /\d+\.{0,1}\d*/g,
  getIntNegative: /-\d+/g,
  getIntPositive: /\d+/g,
  getFloorNegative: /-\d+\.\d+/g,
  getFloorPostive: /\d+\.\d+/g,
  getExponentialNegative: /-\d+\.{0,1}\d*e[-\+]{0,1}\d+/g,
  getExponentialPositive: /\d+\.{0,1}\d*e[-\+]{0,1}\d+/g
};
var _default = REGEXES;
exports["default"] = _default;