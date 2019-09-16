import chai from 'chai';
import digitfy from '../index';

chai.should();

const string = '--1+2.3e45fklq\t90.\n99-23.23e12mn  1b1 qdqek2 . 4 qkq -+12nqd1l12b.12.45-12.718bne09';

describe('Unit Test for all functions', () => {
  it('getNumber', () => {
    digitfy.getNumber(string).should.lengthOf(17);
  });
  it('getNumberExec', () => {
    digitfy.getNumberExec(string).should.lengthOf(17);
  });
  it('getNegativeNumber', () => {
    digitfy.getNegativeNumber(string).should.lengthOf(3);
  });
  it('getNegativeNumberExec', () => {
    digitfy.getNegativeNumberExec(string).should.lengthOf(3);
  });
  it('getPositiveNumber', () => {
    digitfy.getPositiveNumber(string).should.lengthOf(17);
  });
  it('getPositiveNumberExec', () => {
    digitfy.getPositiveNumberExec(string).should.lengthOf(17);
  });
  it('getInt', () => {
    digitfy.getInt(string).should.lengthOf(21);
  });
  it('getIntExec', () => {
    digitfy.getIntExec(string).should.lengthOf(21);
  });
  it('getNegativeInt', () => {
    digitfy.getNegativeInt(string).should.lengthOf(3);
  });
  it('getNegativeintExec', () => {
    digitfy.getNegativeIntExec(string).should.lengthOf(3);
  });
  it('getPositiveInt', () => {
    digitfy.getPositiveInt(string).should.lengthOf(21);
  });
  it('getPositiveIntExec', () => {
    digitfy.getPositiveIntExec(string).should.lengthOf(21);
  });
  it('getFloor', () => {
    digitfy.getFloor(string).should.lengthOf(4);
  });
  it('getFloorExec', () => {
    digitfy.getFloorExec(string).should.lengthOf(4);
  });
  it('getNegativeFloor', () => {
    digitfy.getNegativeFloor(string).should.lengthOf(2);
  });
  it('getNegativeFloorExec', () => {
    digitfy.getNegativeFloorExec(string).should.lengthOf(2);
  });
  it('getPositiveFloor', () => {
    digitfy.getPositiveFloor(string).should.lengthOf(4);
  });
  it('getPositiveFloorExec', () => {
    digitfy.getPositiveFloorExec(string).should.lengthOf(4);
  });
  it('getExponential', () => {
    digitfy.getExponential(string).should.lengthOf(2);
  });
  it('getExponentialExec', () => {
    digitfy.getExponentialExec(string).should.lengthOf(2);
  });
  it('getNegativeExponential', () => {
    digitfy.getNegativeExponential(string).should.lengthOf(1);
  });
  it('getNegativeExponentialExec', () => {
    digitfy.getNegativeExponentialExec(string).should.lengthOf(1);
  });
  it('getPositiveExponential', () => {
    digitfy.getPositiveExponential(string).should.lengthOf(2);
  });
  it('getPositiveExponentialExec', () => {
    digitfy.getPositiveExponentialExec(string).should.lengthOf(2);
  });
});
