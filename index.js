class SortedList {
  constructor() {
    this.items = [];
    this.length = 0; //this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b) {
      return a-b;
    });
    this.length++;
  }

  get(pos) {
    if (pos>=0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
    
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function (a,b) {
        return b-a;
      })
      return this.items[0]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function (a,b) {
        return a-b;
      })
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
