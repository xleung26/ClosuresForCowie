const {
  divide,
  divide5,
  divide10,
  divide20
} = require('./divide')

describe('divide', () => {

  test('divide returns a function', () => {
    expect(divide()).toEqual(expect.any(Function))
  })

  test('divide returns a function', () => {
    expect(divide5).toEqual(expect.any(Function))
  })

  test('divide returns a function', () => {
    expect(divide10).toEqual(expect.any(Function))
  })

  test('divide returns a function', () => {
    expect(divide20).toEqual(expect.any(Function))
  })

  test('divide5 returns its argument divided by 5', () => {
    expect(divide5(10)).toEqual(2)
  })

  test('divide10 returns its argument divided by 10', () => {
    expect(divide10(10)).toEqual(1)
  })

  test('divide20 returns its argument divided by 20', () => {
    expect(divide20(10)).toEqual(0.5)
  })
})