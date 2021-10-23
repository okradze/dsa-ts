import { getTrappedRainwater } from './Question3'

describe('Find Trapped Rainwater area', () => {
  test('returns area correctly', () => {
    expect(getTrappedRainwater([0,1,0,2,1,0,3,1,0,1,2])).toEqual(8)
    expect(getTrappedRainwater([2,1,3,0,2])).toEqual(3)
  })

  test('returns 0', () => {
    expect(getTrappedRainwater([])).toEqual(0)
    expect(getTrappedRainwater([5])).toEqual(0)
    expect(getTrappedRainwater([4,5,3])).toEqual(0)
  })
})
