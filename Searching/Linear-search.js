function ls(value,arr) {
    for(let i =0; i< arr.length;i++){
        if(value === arr[i]){
            return i;
        }
    }
    return-1;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(ls(5,arr));