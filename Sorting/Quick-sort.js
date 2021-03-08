function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    i++;
    swap(arr, i, high);
    return i;
}
function quickSort(array, low, high) {
    if (low < high) {
        let pivotIndex = partition(array, low, high);
        //Recusrively calling the function to the low of the pivot and to the high of the pivot
        quickSort(array, low, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, high);
    }
    return array;
}
let arr = [1, 4, 3, 10, 12, 23, 6, 909, 1234, 96, 12342, 7, 9, 0, 2, 5];
let pi = Math.floor(arr.length / 2); // choosing median as the inital pivot
[arr[pi], arr[arr.length - 1]] = [arr[arr.length - 1], arr[pi]];
console.log(quickSort(arr, 0, arr.length - 1));