const mergeSort = (nums: number[]): number[] => {
  if(nums.length <= 1) return nums
  const middle = Math.floor(nums.length / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)
  
  console.log({ left })
  console.log({ right })

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

const merge = (left: number[], right: number[]): number[] => {
  const merged: number[] = []

  let leftIdx = 0
  let rightIdx = 0

  console.log()
  while(leftIdx < left.length || rightIdx < right.length) {
    if(!right[rightIdx] || left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx])
      leftIdx++
    } else {
      merged.push(right[rightIdx])
      rightIdx++
    }
  }

  return merged
}

console.log(mergeSort([0,5,2,6,3,9,2,6]))