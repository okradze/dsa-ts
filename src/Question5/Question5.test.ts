import { lengthOfLongestSubstring } from './Question5'

describe('Typed Out Strings', () => {
  test('returns correct length', () => {
    expect(lengthOfLongestSubstring('abccabb')).toEqual(3)
    expect(lengthOfLongestSubstring('a')).toEqual(1)
    expect(lengthOfLongestSubstring('abcdefg')).toEqual(7)
    expect(lengthOfLongestSubstring('abcadefg')).toEqual(7)
  })

  test('returns 0', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0)
  })
})
