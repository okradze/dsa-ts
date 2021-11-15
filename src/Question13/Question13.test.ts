import { kthLargestElement } from './Question13'

describe('Length of longest substring', () => {
  test('returns correct value', () => {
    expect(kthLargestElement([2, 1, 7, 4, 5], 2)).toEqual(5)
    expect(kthLargestElement([3,2,3,1,2,4,5,5,6], 4)).toEqual(4)
    expect(kthLargestElement([3,2,1,5,6,4], 2)).toEqual(5)
  })
})
