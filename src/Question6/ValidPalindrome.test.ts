import { isValidPalindrome } from './ValidPalindrome'

describe('Valid Palindrome', () => {
  test('returns true', () => {
    expect(isValidPalindrome('aabaa')).toEqual(true)
    expect(isValidPalindrome('Aabaa')).toEqual(true)
    expect(isValidPalindrome('aabbaa')).toEqual(true)
    expect(isValidPalindrome('a')).toEqual(true)
    expect(isValidPalindrome('')).toEqual(true)
    expect(isValidPalindrome('A man, a plan, a canal,: Panama')).toEqual(true)
  })

  test('returns false', () => {
    expect(isValidPalindrome('abc')).toEqual(false)
    expect(isValidPalindrome('ab')).toEqual(false)
  })
})
