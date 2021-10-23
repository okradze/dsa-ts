// Time Complexity: O(n^2)
// Space Complexity: O(1)

// export const findContainerWithMaxArea = (heights: number[]) => {
//   let maxArea = 0;

//   for(let p1 = 0; p1 < heights.length; p1++) {
//     for(let p2 = p1 + 1; p2 < heights.length; p2++) {
//       let area = Math.min(heights[p1], heights[p2]) * (p2-p1)
//       if(area > maxArea) {
//         maxArea = area
//       }
//     }
//   }

//   return maxArea;
// }

export const findContainerWithMaxArea = (heights: number[]) => {
  let maxArea = 0;
  let p1 = 0;
  let p2 = heights.length - 1;

  while(p1 < p2) {
    let a = heights[p1]
    let b = heights[p2]
    let area = Math.min(a,b) * (p2 - p1)

    if(area > maxArea) {
      maxArea = area
    }

    if(a <= b) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}