// Time: O(N^2)
// Space: O(N)
// "abcda"
// export const lengthOfLongestSubstring = (s: string): number => {
//   if(s.length <= 1) return s.length

//   let longest = 0
  
//   for(let i = 0; i < s.length; i++) {
//     let currentLength = 0
//     let seen: any = {}

//     for (let j = i; j < s.length; j++) {
//       let char = s[j]
      
//       if(seen[char]) {
//         currentLength = 0
//         break
//       }

//       seen[char] = true
//       currentLength++

//       if(currentLength > longest) {
//         longest = currentLength
//       }
//     }
//   }

//   return longest
// }

// "abcbda"
export const lengthOfLongestSubstring = (s: string): number => {
  if(s.length <= 1) return s.length
  
  let longest = 0, left = 0;
  let seen = new Map<string, number>()

  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    const seenChar = seen.get(char)

    if(seenChar! >= left) {
      left = seenChar! + 1
    }
    seen.set(char, right)
    longest = Math.max(longest, right - left + 1)
  }

  return longest
}