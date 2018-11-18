const loginProtect = require('./loginProtect')

describe('loginProtect', () => {
  const add = (a, b) => a + b
  const protectedLogin = loginProtect('foo', 'bar', add)
  const firstTry = protectedLogin('foo', 'baaaa', 1, 2)
  const secondTry = protectedLogin('foooool', 'baaser', 2, 4)
  const thirdTryIsTheCharm = protectedLogin('foo', 'bar', 1, 2)

  test('firstTry Should be Undefined', () => {
    expect((firstTry)).toEqual(undefined)
  })

  test('secondTry Should be Undefined', () => {
    expect((secondTry)).toEqual(undefined)
  })

  test('thirdTryIsTheCharm Should be Undefined', () => {
    expect((thirdTryIsTheCharm)).toEqual(3)
  })
})