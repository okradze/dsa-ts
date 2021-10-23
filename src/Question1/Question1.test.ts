import { findTwoIndicesOfSum } from './Question1'

describe('Array Two Sum', () => {
  test('finds target', () => {
    expect(findTwoIndicesOfSum([1,3,7,9,2], 11)).toEqual([3,4])
    expect(findTwoIndicesOfSum([1,3,7,9,2], 5)).toEqual([1,4])
    expect(findTwoIndicesOfSum([1,2], 3)).toEqual([0,1])
  })

  test('returns null if no target', () => {
    expect(findTwoIndicesOfSum([1,3,7,9,2], 25)).toEqual(null)
    expect(findTwoIndicesOfSum([1,2], 4)).toEqual(null)
  })

  test('returns null if empty array', () => {
    expect(findTwoIndicesOfSum([], 1)).toEqual(null)
  })

  test('returns null if array with one item', () => {
    expect(findTwoIndicesOfSum([5], 5)).toEqual(null)
  })
})
