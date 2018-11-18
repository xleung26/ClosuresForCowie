const whatsmyname = require('./whatsmyname')

describe('whatsmyname', () => {
    const mynameisnick = whatsmyname('nick')
    const mynameisryan = whatsmyname('ryan')
    const mynameisdave = whatsmyname('dave')

  test('When whatsmyname is invoked it should return a function', () => {
    expect(mynameisnick).toEqual(expect.any(Function))
  })

  test('When whatsmyname is invoked it should return a function', () => {
    expect(mynameisryan).toEqual(expect.any(Function))
  })

  test('When whatsmyname is invoked it should return a function', () => {
    expect(mynameisdave).toEqual(expect.any(Function))
  })
  
  test('When invoked should return the correct boolean', () => {
    expect(mynameisnick('nick')).toEqual(true)
  })

  test('When invoked should return the correct boolean', () => {
    expect(mynameisryan('jon')).toEqual(false)
  })

  test('When invoked should return the correct boolean', () => {
    expect(mynameisdave('dave')).toEqual(true)
  })
})