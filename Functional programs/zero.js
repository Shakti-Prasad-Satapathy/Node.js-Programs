var nums = [-1, -2, 3, 5, -3, -4];
var sum = 0;
for (i = 0; i<nums.length; i++){
    for (j = 0; j<nums.length; j++){
        for (k = 0; k<nums.length; k++){

            if (nums[i] != nums[j] && nums[i] != nums[k] && nums[k] != nums[j]){
                sum = nums[i] + nums[j] + nums[k]
                if (sum == 0){
                    console.log("the 3 numbers are... "+nums[i]+", "+nums[j]+", "+nums[k])
                }
            }
        }
    }
}