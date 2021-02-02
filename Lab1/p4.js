// use .map to create new number array

const strArr = ['1', '2', '3', '4', '5', '6', '7'];

const NumberArr = strArr.map((item) => {
    return parseInt(item)
    //console.log(item);
});
console.log(NumberArr);

// output => [1,2,3,4,5,6,7]