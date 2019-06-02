import Middlewares from './middlewares';
import Helpers from './helpers';

export default class Controllers {

    static getNumber(string) {
        return Middlewares.getMatch(string, Helpers.getNumber);
    }

    static getNegativeNumber(string) {
        return Middlewares.getMatch(string, Helpers.getNumberNegative);
    }

    static getPositiveNumber(string) {
        return Middlewares.getMatch(string, Helpers.getNumberPositive);
    }

    static getNumberExec(string) {
        return Middlewares.getExec(string, Helpers.getNumber);
    }

    static getNegativeNumberExec(string) {
        return Middlewares.getExec(string, Helpers.getNumberNegative);
    }

    static getPositiveNumberExec(string) {
        return Middlewares.getExec(string, Helpers.getNumberPositive);
    }

    static getInt(string) {
        return Middlewares.getMatch(string, Helpers.getInt);
    }

    static getNegativeInt(string) {
        return Middlewares.getMatch(string, Helpers.getIntNegative);
    }

    static getPositiveInt(string) {
        return Middlewares.getMatch(string, Helpers.getIntPositive);
    }

    static getIntExec(string) {
        return Middlewares.getExec(string, Helpers.getInt);
    }

    static getNegativeIntExec(string) {
        return Middlewares.getExec(string, Helpers.getIntNegative);
    }

    static getPositiveIntExec(string) {
        return Middlewares.getExec(string, Helpers.getIntPositive);
    }

    static getFloor(string) {
        return Middlewares.getMatch(string, Helpers.getFloor);
    }

    static getNegativeFloor(string) {
        return Middlewares.getMatch(string, Helpers.getFloorNegative);
    }

    static getPositiveFloor(string) {
        return Middlewares.getMatch(string, Helpers.getFloorPostive);
    }

    static getFloorExec(string) {
        return Middlewares.getExec(string, Helpers.getFloor);
    }
    static getNegativeFloorExec(string) {
        return Middlewares.getExec(string, Helpers.getFloorNegative);
    }

    static getPositiveFloorExec(string) {
        return Middlewares.getExec(string, Helpers.getFloorPostive);
    }

    static getExponential(string) {
        return Middlewares.getMatch(string, Helpers.getExponential);
    }

    static getNegativeExponential(string) {
        return Middlewares.getMatch(string, Helpers.getExponentialNegative);
    }

    static getPositiveExponential(string) {
        return Middlewares.getMatch(string, Helpers.getExponentialPositive);
    }

    static getExponentialExec(string) {
        return Middlewares.getExec(string, Helpers.getExponential);
    }

    static getNegativeExponentialExec(string) {
        return Middlewares.getExec(string, Helpers.getExponentialNegative);
    }

    static getPositiveExponentialExec(string) {
        return Middlewares.getExec(string, Helpers.getExponentialPositive);
    }

}
