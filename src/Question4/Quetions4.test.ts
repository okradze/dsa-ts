import { areTypedOutStringsEqual} from './Question4'

describe('Typed Out Strings', () => {
  test('returns true', () => {
    expect(areTypedOutStringsEqual('ab#c', 'ad#c')).toEqual(true)
    expect(areTypedOutStringsEqual('ab##c', 'kd##c')).toEqual(true)
    expect(areTypedOutStringsEqual('ab####c', 'kd####c')).toEqual(true)
  })

  test('returns false', () => {
    expect(areTypedOutStringsEqual('ab#c', 'al#d')).toEqual(false)
    expect(areTypedOutStringsEqual('Ab#c', 'ab#c')).toEqual(false)
  })
})
