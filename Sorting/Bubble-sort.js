function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubble(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[i]){
                swap(arr,i,j);
            }
        }
    }
    return arr;
}

let arr = [1, 4, 3, 10, 12, 23, 6, 909, 1234, 96, 12342, 7, 9, 0, 2, 5];
console.log(bubble(arr));