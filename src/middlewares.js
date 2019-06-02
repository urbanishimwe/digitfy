export default class Middlewares {
    static match(string, regex) {
        return string.match(regex);
    }
    static exec(string, regex) {
        let temp;
        const searches = [];
        while((temp = regex.exec(string))) {
            searches.push(temp);
        }
        return searches;
    }
    static getMatch(string, regex) {
        const numbers = Middlewares.match(string, regex);
        numbers.forEach((element, index) => {
            numbers[index] = Number(element);
        });
        return numbers;
    }
    static getExec(string, regex) {
        const numbers = Middlewares.exec(string, regex);
        const numbersExec = [];
        numbers.forEach((element, index) => {
            const end = (element[0].endsWith('.')) ? element[0].length - 1 : element[0].length;
            element[0] = Number(element[0]);
            numbersExec.push({number: element[0], start: element.index, end});
        });
        return numbersExec;
    }
}