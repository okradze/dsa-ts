import { findContainerWithMaxArea } from './Question2'

describe('Find Container With Max Area', () => {
  test('returns area correctly', () => {
    expect(findContainerWithMaxArea([7,1,2,3,9])).toEqual(28)
    expect(findContainerWithMaxArea([4,8,1,2,3,9])).toEqual(32)
    expect(findContainerWithMaxArea([4,8,1,9,3])).toEqual(16)
    expect(findContainerWithMaxArea([7, 9])).toEqual(7)
    expect(findContainerWithMaxArea([7, 9, 8])).toEqual(14)
  })

  test('returns 0 if empty array or one element', () => {
    expect(findContainerWithMaxArea([])).toEqual(0)
    expect(findContainerWithMaxArea([5])).toEqual(0)
  })
})
