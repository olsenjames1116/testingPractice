export default class AnalyzeArray {
    constructor(array) {
        this.array = array;
    }

    get average() {
        const sum = this.array.reduce((total, current) => total + current, 0);

        return sum / this.length;
    }

    get min() {
        return 1;
    }

    get max() {
        return 1;
    }

    get length() {
        return this.array.length;
    }
}