export default class AnalyzeArray {
  constructor(array) {
    this.array = array;
  }

  get average() {
    const sum = this.array.reduce((total, current) => total + current, 0);

    return sum / this.length;
  }

  get min() {
    this.array.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

    return this.array[0];
  }

  get max() {
    this.array.sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });

    return this.array[this.array.length - 1];
  }

  get length() {
    return this.array.length;
  }
}
