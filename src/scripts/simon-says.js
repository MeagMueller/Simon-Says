// const locations = [[3,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         let invalidLocation = true
//     } else {
//         console.log("This location is invalid")
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */

// }

// // console.log(`There were ${} invalid locations`)

// Again, I'm getting there but I'm still messing it up ARGH

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

//     for (let k = 0; k < locations.length; k++) {
//         currentLocation = locations[k]
//     }

//     /*Create one if statement*/

//         if (currentLocation[0] > 2) {
//             const invalidLocation = true
//         if (invalidLocation) {
//             console.log("This location is invalid")
//         }
//     }


// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ` + (incrementLocation()) + `invalid locations`)

// Starting over!

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
    let incrementLocation = 0;

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        const invalidLocation = true
    incrementLocation ++ }
    }
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${incrementLocation} invalid locations`)