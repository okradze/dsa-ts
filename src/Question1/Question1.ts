// Return indexes of 2 elements that add up to sum
// export const findTwoIndicesOfSum = (nums: number[], sum: number): number[] | null => {
//   if(nums.length === 0 || nums.length === 1) return null
  
//   let p1 = 0
//   let p2 = 1
  
//   while(p1 < nums.length) {
//     const target = sum - nums[p1]

//     while (p2 < nums.length) {
//       if (nums[p2] === target) {
//         return [p1, p2]
//       }
//       p2++;
//     }
    
//     p1++;
//     p2 = p1 + 1;
//   }

//   return null
// }

// export const findTwoIndicesOfSum = (nums: number[], target: number): number[] | null => {  
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     const numToFind = target - nums[p1]

//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       if(nums[p2] === numToFind) {
//         return [p1, p2]
//       }
//     }
//   }

//   return null
// }


export const findTwoIndicesOfSum = (nums: number[], target: number): number[] | null => {
  const history: any = {}

  for(let p = 0; p < nums.length; p++) {
    const numToFind = target - nums[p]

    if (history[numToFind] !== undefined) {
      return [history[numToFind], p]
    }

    history[nums[p]] = p
  }

  return null
}
