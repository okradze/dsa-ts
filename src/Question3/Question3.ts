// export const getTrappedRainwater = (heights: number[]): number => {
//   let trappedArea = 0

//   for (let i = 0; i < heights.length; i++) {
//     let maxLeft = 0;
//     let maxRight = 0;

//     for (let l = i - 1; l >= 0; l--) {
//       maxLeft = Math.max(maxLeft, heights[l])
//     }

//     for (let r = i + 1; r < heights.length; r++) {
//       maxRight = Math.max(maxRight, heights[r])
//     }

//     let area = Math.min(maxLeft, maxRight) - heights[i]

//     if(area > 0) {
//       trappedArea += area
//     }
//   }

//   return trappedArea
// }
export const getTrappedRainwater = (heights: number[]): number => {
   let trappedArea = 0
   let maxLeft = 0
   let maxRight = 0
   let p1 = 0
   let p2 = heights.length - 1
  
   while(p1 < p2) {
    let left = heights[p1]
    let right = heights[p2]
  
    if(left <=right) {
     if(left > maxLeft) {
      maxLeft = left
     } else {
      trappedArea += maxLeft - left
     }
     p1++
    } else {
     if(right > maxRight) {
       maxRight = right
       } else {
         trappedArea += maxRight - right
       }
     p2--
    }
   }
  
   return trappedArea
  }