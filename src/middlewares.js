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
}