import {sum, queryDB, someCallingDB} from './common'

describe('sum', () => {
  test('should return 3 when input 1 and 2', () => {
    const want = 3

    const got = sum(1, 2)

    expect(got).toEqual(want)
  })

  test('should return 5 when input 3 and 2', () => {
    const want = 5

    const got = sum(3, 2)

    expect(got).toEqual(want)
  })

  test('2 not equal 3', () => {
    const result = sum(2, 2)

    expect(result).not.toEqual(3)
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThan(10)
  })
})

describe('common matcher', () => {
  test('should be null', () => {
    const result = queryDB()

    // expect(result).toBe(null)
    // expect(result).toEqual(null)
    expect(result).toBeNull()
  })

  test('should return error', () => {
    expect(() => someCallingDB()).toThrow(/ECONNREFUSED/)
    expect(() => someCallingDB()).toThrow()
    expect(() => someCallingDB()).toThrow(Error)
    expect(() => someCallingDB()).toThrow('connect ECONNREFUSED 127.0.0.1:2727')
  })

  test('the array should contain somthing', () => {
    const arr = [1, 2, 3]

    expect(arr).toContain(1)
  })

  test('contains', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ]

    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
  })

  test('toEqual', () => {
    const want = {one: 1, two: 2}
    const got = {one: 1, two: 2}

    expect(got).toEqual(want)
  })
})
