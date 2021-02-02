// use .filter to create a new array that does not contain null value ////////yes is keep

const arr = [1, 3, 4, 5, null, 2, null, -4, null]
//const number = [1, 2, 3, 4, 5];
const filtered = arr.filter((item) => {
    return item !== null;
});
// [1,3,4,5,2,-4]
console.log(filtered);