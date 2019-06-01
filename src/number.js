import Middlewares from '../src/middlewares';
import Helpers from '../src/helpers';

export default class Controllers {
    static getNumber(string) {
        const numbers = Middlewares.match(string, Helpers.getNumber);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getNegativeNumber(string) {
        const numbers = Middlewares.match(string, Helpers.getNumberNegative);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getPositiveNumber(string) {
        const numbers = Middlewares.match(string, Helpers.getNumberPositive);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getNumberExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getNumber);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = (element[0].endsWith('.')) ? element[0].length - 1 : element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getNumberNegativeExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getNumberNegative);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = (element[0].endsWith('.')) ? element[0].length - 1 : element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getNumberPositiveExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getNumberPositive);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = (element[0].endsWith('.')) ? element[0].length - 1 : element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getInt(string) {
        const numbers = Middlewares.match(string, Helpers.getInt);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getNegativeInt(string) {
        const numbers = Middlewares.match(string, Helpers.geIntNegative);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getPositiveInt(string) {
        const numbers = Middlewares.match(string, Helpers.getIntPositive);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getIntExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getInt);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getIntNegativeExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getIntNegative);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getIntPositiveExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getIntPositive);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getFloor(string) {
        const numbers = Middlewares.match(string, Helpers.getFloor);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getNegativeFloor(string) {
        const numbers = Middlewares.match(string, Helpers.getFloorNegative);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getPositiveFloor(string) {
        const numbers = Middlewares.match(string, Helpers.getFloorPostive);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getFloorExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getFloor);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getNegativeFloorExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getFloorNegative);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getPositiveFloorExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getFloorPostive);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getExponential(string) {
        const numbers = Middlewares.match(string, Helpers.getExponential);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getNegativeExponential(string) {
        const numbers = Middlewares.match(string, Helpers.getExponentialNegative);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getPositiveExponential(string) {
        const numbers = Middlewares.match(string, Helpers.getExponentialPositive);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getExponentialExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getExponential);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getNegativeExponentialExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getExponentialNegative);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
    static getPositiveExponentialExec(string) {
        const numbers = Middlewares.exec(string, Helpers.getExponentialPositive);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
}
