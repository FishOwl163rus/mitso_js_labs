function twosDifference(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] - nums[j] === 2){
                arr.push([nums[j], nums[i]])
            }
        }
    }
    return arr;
}


console.log(twosDifference([1, 2, 3, 4])); // --> [ [ 1, 3 ], [ 2, 4 ] ]
console.log(twosDifference([1, 3, 4, 6])); // --> [ [ 1, 3 ], [ 4, 6 ] ]

