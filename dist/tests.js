"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_chai["default"].should();

var string = '--1+2.3e45fklq\t90.\n99-23.23e12mn  1b1 qdqek2 . 4 qkq -+12nqd1l12b.12.45-12.718bne09';
describe('Unit Test for all functions', function () {
  it('getNumber', function () {
    _index["default"].getNumber(string).should.lengthOf(17);
  });
  it('getNumberExec', function () {
    _index["default"].getNumberExec(string).should.lengthOf(17);
  });
  it('getNegativeNumber', function () {
    _index["default"].getNegativeNumber(string).should.lengthOf(3);
  });
  it('getNegativeNumberExec', function () {
    _index["default"].getNegativeNumberExec(string).should.lengthOf(3);
  });
  it('getPositiveNumber', function () {
    _index["default"].getPositiveNumber(string).should.lengthOf(17);
  });
  it('getPositiveNumberExec', function () {
    _index["default"].getPositiveNumberExec(string).should.lengthOf(17);
  });
  it('getInt', function () {
    _index["default"].getInt(string).should.lengthOf(21);
  });
  it('getIntExec', function () {
    _index["default"].getIntExec(string).should.lengthOf(21);
  });
  it('getNegativeInt', function () {
    _index["default"].getNegativeInt(string).should.lengthOf(3);
  });
  it('getNegativeintExec', function () {
    _index["default"].getNegativeIntExec(string).should.lengthOf(3);
  });
  it('getPositiveInt', function () {
    _index["default"].getPositiveInt(string).should.lengthOf(21);
  });
  it('getPositiveIntExec', function () {
    _index["default"].getPositiveIntExec(string).should.lengthOf(21);
  });
  it('getFloor', function () {
    _index["default"].getFloor(string).should.lengthOf(4);
  });
  it('getFloorExec', function () {
    _index["default"].getFloorExec(string).should.lengthOf(4);
  });
  it('getNegativeFloor', function () {
    _index["default"].getNegativeFloor(string).should.lengthOf(2);
  });
  it('getNegativeFloorExec', function () {
    _index["default"].getNegativeFloorExec(string).should.lengthOf(2);
  });
  it('getPositiveFloor', function () {
    _index["default"].getPositiveFloor(string).should.lengthOf(4);
  });
  it('getPositiveFloorExec', function () {
    _index["default"].getPositiveFloorExec(string).should.lengthOf(4);
  });
  it('getExponential', function () {
    _index["default"].getExponential(string).should.lengthOf(2);
  });
  it('getExponentialExec', function () {
    _index["default"].getExponentialExec(string).should.lengthOf(2);
  });
  it('getNegativeExponential', function () {
    _index["default"].getNegativeExponential(string).should.lengthOf(1);
  });
  it('getNegativeExponentialExec', function () {
    _index["default"].getNegativeExponentialExec(string).should.lengthOf(1);
  });
  it('getPositiveExponential', function () {
    _index["default"].getPositiveExponential(string).should.lengthOf(2);
  });
  it('getPositiveExponentialExec', function () {
    _index["default"].getPositiveExponentialExec(string).should.lengthOf(2);
  });
});