function bst(val, arr, start, end) {
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (val === arr[middle]) {
            return middle;
        } else if (val < arr[middle]) {
            return bst(val, arr, start, middle - 1);
        } else if (val > arr[middle]) {
            return bst(val, arr, middle + 1, end);
        }
    }
    return -1;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(bst(-5, arr, 0, arr.length - 1));
