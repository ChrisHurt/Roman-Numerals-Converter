var baseTenToRomanNumerals = require('./romanNumerals')

test('Jest is working',()=>{
  expect(true).toEqual(true)
})

test('1 to 5, yields I to V',()=>{
  expect(baseTenToRomanNumerals(1)).toEqual('I')
  expect(baseTenToRomanNumerals(2)).toEqual('II')
  expect(baseTenToRomanNumerals(3)).toEqual('III')
  expect(baseTenToRomanNumerals(4)).toEqual('IV')
  expect(baseTenToRomanNumerals(5)).toEqual('V')
})

test('6 to 10, yields VI to X',()=>{
  expect(baseTenToRomanNumerals(6)).toEqual('VI')
  expect(baseTenToRomanNumerals(7)).toEqual('VII')
  expect(baseTenToRomanNumerals(8)).toEqual('VIII')
  expect(baseTenToRomanNumerals(9)).toEqual('IX')
  expect(baseTenToRomanNumerals(10)).toEqual('X')
})

test('90,92,98,99,100, yields XC,XCII,XCVIII,XCIX, C',()=>{
  expect(baseTenToRomanNumerals(90)).toEqual('XC')
  expect(baseTenToRomanNumerals(92)).toEqual('XCII')
  expect(baseTenToRomanNumerals(98)).toEqual('XCVIII')
  expect(baseTenToRomanNumerals(99)).toEqual('XCIX')
  expect(baseTenToRomanNumerals(100)).toEqual('C')
})

test('150,990,2852, yields CL, CMXC, MMDCCCLII',()=>{
  expect(baseTenToRomanNumerals(150)).toEqual('CL')
  expect(baseTenToRomanNumerals(990)).toEqual('CMXC')
  expect(baseTenToRomanNumerals(2852)).toEqual('MMDCCCLII')
})