// function mergeSort(array) {
//     if (array.length <= 1) {
//         return array;
//     }

//     const middle = Math.floor(array.length / 2);
//     let left = array.slice(0, middle);
//     let right = array.slice(middle, array.length);

//     left = mergeSort(left);
//     right = mergeSort(right);
    
//     return merge(left, right, array);
// };
// function merge(left, right, array) {
//     let leftIndex = 0;
//     let rightIndex = 0;
//     let outputIndex = 0;
//     console.log(array)
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             array[outputIndex++] = left[leftIndex++];
//         }
//         else {
//             array[outputIndex++] = right[rightIndex++];
//         }
//     }

//     for (let i = leftIndex; i < left.length; i++) {
//         array[outputIndex++] = left[i];
//     }

//     for (let i = rightIndex; i < right.length; i++) {
//         array[outputIndex++] = right[i];
//     }
//     return array;
// };

// const arr1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
// const nums = [3, 9, 1, 14, 17, 24, 22, 20]
// const nums2 = '3 9 1 14 17 24 22 20'.split(' ')
   
// // mergeSort(arr1)

// function quickSort(array, start = 0, end = array.length) {
//     if (start >= end) {
//         return array;
//     }
//     const middle = partition(array, start, end);
//     array = quickSort(array, start, middle);
//     array = quickSort(array, middle + 1, end);
//     return array;
// };
// function partition(array, start, end) {
//     const pivot = array[end];
//     let j = start;

//     for (let i = start; i < end - 1; i++) {
//         if (array[i] <= pivot) {
//             swap(array, i, j);
//             j++;
//         }
//     }
//     swap(array, end-1, j);
//     return j;
// };
// function swap (arr, idx1, idx2){
//     let a = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = a
// }
// console.log(quickSort(arr1))
// console.log(quickSort(nums))
// console.log(quickSort(nums2))

// //the pivot neither 14 nor 17 have been the pivot, both number
// //not change the order of the list
// //output when settiing the last number as the pivot:[ 20, 3, 9, 1, 14, 17, 24, 22 ]
// //output when setting the first number as the pivot:[ 3, 1, 20, 9, 14, 17, 24, 22 ]


//Q3 
const list='89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ').map(a=>Number(a));
console.log(list)