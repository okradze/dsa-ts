const selectionSort = (nums: number[]) => {
  if(nums.length <= 1) return nums

  for (let i = 0; i < nums.length; i++) {
    let smallestIdx = i
    
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] < nums[smallestIdx]) {
        smallestIdx = j
      }
    }

    const temp = nums[i]
    nums[i] = nums[smallestIdx]
    nums[smallestIdx] = temp
  }

  return nums
}

console.log(selectionSort([0,5,2,6,3,9,2,6]))