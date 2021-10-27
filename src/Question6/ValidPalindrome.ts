// export const isValidPalindrome = (s: string): boolean => {
//   s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

//   let middle = Math.floor((s.length - 1) / 2)
//   let left = middle
//   let right = s.length % 2 === 0 ? middle + 1 : middle

//   while(left >= 0 && right <= s.length - 1) {
//     if(s[left] !== s[right]) return false
//     left--
//     right++
//   }

//   return true
// }

export const isValidPalindrome = (s: string): boolean => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  let left = 0
  let right = s.length - 1

  while(left < right) {
    if(s[left] !== s[right]) return false
    left++
    right--
  }

  return true
}