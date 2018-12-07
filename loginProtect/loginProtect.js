/*
Write a function called loginProtect
This function will take 3 arguments
1. A username
2. A password
3. A function that will take two arguments
Your function should return a closure that when invoked 
with the correct username and password will invoke your third argument
with the 3rd and 4th argument that are passed to your closure 
Use the tests to guide your solution
*/

const add = (a,b) => {
	return a + b;
}

const loginProtect = function (username, correctPass, myFunc) {
	return function match (typedUser, typedPass, a, b) {
	  if (typedUser === username && typedPass === correctPass){
	  	return myFunc(a,b);
	  }
	  return undefined;
	}
}

const protectedLogin = loginProtect('foo', 'bar', add)
const firstTry = protectedLogin('foo', 'baaaa', 1, 2)
const secondTry = protectedLogin('foooool', 'baaser', 2, 4)
const thirdTryIsTheCharm = protectedLogin('foo', 'bar', 1, 2)

/*
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
*/

module.exports = loginProtect
