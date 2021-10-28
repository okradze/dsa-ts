import { isAlmostPalindrome } from './AlmostPalindrome'

describe('Valid Palindrome', () => {
  test('returns true', () => {
    expect(isAlmostPalindrome('race a car')).toEqual(true)
    expect(isAlmostPalindrome('abccdba')).toEqual(true)
    expect(isAlmostPalindrome('acba')).toEqual(true)
    expect(isAlmostPalindrome('eedede')).toEqual(true)
    expect(isAlmostPalindrome('')).toEqual(true)
    expect(isAlmostPalindrome('a')).toEqual(true)
    expect(isAlmostPalindrome('ab')).toEqual(true)
  })

  test('returns false', () => {
    expect(isAlmostPalindrome('abcdefdba')).toEqual(false)
    expect(isAlmostPalindrome('abc')).toEqual(false)
  })
})
