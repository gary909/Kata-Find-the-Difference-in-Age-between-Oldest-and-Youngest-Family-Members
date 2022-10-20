function differenceInAges(ages) {
    let min = Math.min.apply(null, ages);
    let max = Math.max.apply(null, ages);
    let diff = max - min;
    let myArr = [min, max, diff];
    return myArr;
}

console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]