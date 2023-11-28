// Task1

// let arrABC = ['n', 'i', 'h', 'a', 'd'];
// let arr1 = ['a', 'd', 7];
// let arr = [2, 4, 3, 4, 6, 4, 3, 131];

// function clone() {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i];
//     }
//     console.log(newArr);
// }

// clone();

// Task2

// function firstElement() {

//     if (arr.length !== 0) {
//         console.log(arr[0]);
//     }

//     else {
//         prompt('arrays is empty!')
//     }

// }
// firstElement()

// Task 3

// function join() {
//     let str = '';
//     for (let i = 0; i < arrABC.length; i++) {
//         str = str + arrABC[i];
//     }
//     console.log(str);
// }

// join();

// Task 4



// Task 5

// function sum() {
//     let s = 0;
//     for (let i = 0; i < arr.length; i++) {
//         s += arr[i];
//     }

//     console.log(s);
// }

// sum();

// function product() {
//     let n = 1;
//     for (let p = 0; p < arr.length; p++) {
//         n = n * arr[p];
//     }
//     console.log(n);
// }

// product();

// Task 6
// let arr = [2, 4, 3, 4, 6, 4, 3, 131];

// function dublicate() {
//     let newArr = [];
//     let index = 0;

//     for (let i = 0; i < arr.length - 1; i++) {

//         for (let j = i - 1; j < arr.length; j++) {
//             if (arr[j] == arr[i]) {

//                 // newArr.push(arr[j]);
//                 newArr[index] = arr[i];
//                 index++;
//                 // break;
//             }

//         }
//         // else{
//         //     console.log("hiiii")
//         // }
//     }
//     return newArr;
// }

// dublicate();


// Task 7

// function removeElement(array, elem) {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == elem) {

//             arr.splice(i, 1)
//             break;
//         }

//     }

// }

// removeElement(arr, 3)
// console.log(arr)


// // Task 8

// let arr = [2, 4, 3, 4, 6, 4, 3];

// function lastElement() {

//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if (i == arr.length - 1) {
//             console.log(arr.splice(i, 1))
//             break;
//         }

//     }
// }

// lastElement()
// console.log(arr)



// Task 9

// let str = "Hello worLd"

// function lowerAnduppercase() {
//     let gatheringWords = '';
//     for (let i = 0; i < str.length; i++) {
//         // console.log(i)
//         for (let j of str[i]) {

//             if (j == j.toUpperCase()) {
//                 gatheringWords += j.toLowerCase();
//             }
//             else {
//                 gatheringWords += j.toUpperCase();
//             }
//         }
//     }

//     console.log(gatheringWords);
// }

// lowerAnduppercase()




// // Task for live lesson

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function deleteElements(array, num) {

//     console.log(array.splice(arr.length - num, num + 1));
// }

// deleteElements(arr, 4)