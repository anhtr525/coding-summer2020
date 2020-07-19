// for (let x = 1; x < 101; x++) {
//     if (x%15 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (x%5 == 0) {
//         console.log("Buzz");
//     }
//     else if (x%3 == 0) {
//         console.log( "Fizz");
//     }
//     else {
//         console.log(x);
//     }
// }
// // the program goes through the x%15 first, and then goes through the x%5 and x%3

// // start with the first hashtag
// // add 1 to the previous hashtag
// // keep adding until there are 7 hashtags
// let y = "#";
// while (y.length <= 7 ) {
//     console.log(y)
//     y+="#";
// }

// function linearSearch (list, targetvalue) {
//     for(let index = 0; index < list.length; index++) {
//         if (list[index] == targetvalue) {
//             return index;
//         }
//     }
// }
// let list = ["apple", "banana", "cherry", "dragonfruid", "strawberry"];
// let targetvalue = "berry";
// let foundindex = linearSearch(list, targetvalue);
// console.log(foundindex);

// function selectionSort (list) {
//     for (let index = 0; index < list.length; index ++) {
//         let minIndex = index;
//         for (let newIndex = index; newIndex < list.length; newIndex ++) {
//             if (list[newIndex] < list[minIndex]) {
//                 minIndex = newIndex;
//             }
//         }
//         let holder = list[index];
//         list[index] = list[minIndex];
//         list[minIndex] = holder;
//     }
//     return list;
// }
// let list = [2,6,2,4,8,4];
// console.log(list);
// console.log(selectionSort(list));

function insertionSort (list) {
    for (let index = 1; index < list.length; index++) {
        let newIndex = index;
        while ((list[newIndex] < list[newIndex -1]) && (newIndex > 0)) {
            let holder = list[newIndex];
            list[newIndex] = list[newIndex -1];
            list[newIndex -1] = holder;
            newIndex--;
        }
    }
    return list;
}
let list = [4,3,5,1,2];
console.log(list);
console.log(insertionSort(list));