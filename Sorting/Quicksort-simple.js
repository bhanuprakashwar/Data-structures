function quicksort(values) {
    if (values.length <= 1) {
        return values;
    }
    let lessthanpivot = [], pivot = values[0], greaterthanpivot = [];
    for (let i = 1; i < values.length; i++) {
        if (values[i] < pivot) {
            lessthanpivot.push(values[i]);
        } else {
            greaterthanpivot.push(values[i]);
        }
    }
    // return quicksort(lessthanpivot).concat(pivot, quicksort(greaterthanpivot));
    return [...quicksort(lessthanpivot),pivot,...quicksort(greaterthanpivot)];

}
const testValues = [0, 50, 1, 2, 29, 28, 88, 3, 51, 67, 37, 1, 57, 20];
let sorted = quicksort(testValues);
console.log(sorted);
