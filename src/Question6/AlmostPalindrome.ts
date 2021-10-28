export const isValidPalindrome = (s: string, left: number, right: number): boolean => {
  while(left < right) {
    if(s[left] !== s[right]) return false
    left++
    right--
  }

  return true
}

export const isAlmostPalindrome = (s: string): boolean => {
  if(s.length <= 2) return true

  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()

  let left = 0
  let right = s.length - 1

  while(left < right) {
    if(s[left] !== s[right]) {
      if(right - left === 1) return true
      return isValidPalindrome(s, left, right - 1) || isValidPalindrome(s, left + 1, right)
    }

    left++
    right--
  }

  return true
}