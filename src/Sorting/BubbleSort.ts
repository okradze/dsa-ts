const bubbleSort = (nums: number[]) => {
  if(nums.length <= 1) return nums

  for(let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if(nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp
      }
    }
  }
  
  return nums
}

console.log(bubbleSort([0,5,2,6,3,9,2,6]))