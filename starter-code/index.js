class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }

    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length += 1;
    }
    get(pos) {
      if (pos <= this.length) {
        return this.items[pos];
      } else {
        throw new Error('OutOfBounds');
      }
    }
    max() {
      if (this.length > 0) {
        return Math.max(...this.items);
      } else {
        throw new Error("EmptySortedList");
      }
    }
    min() {
      if (this.length > 0) {
        return Math.min(...this.items);
      } else {
        throw new Error('EmptySortedList');
      }
    }
    average() {
      if (this.length > 0) {
        return this.sum() / this.length;
      } else {
        throw new Error('EmptySortedList');
      }
    }
    sum() {
      if (this.length > 0) {
        return this.items.reduce((acc, e) => e + acc, 0);
      } else {
        return 0;
      }      
    }
  };
  
  module.exports = SortedList;