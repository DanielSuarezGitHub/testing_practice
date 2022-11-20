import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from "./testingpractice";

test('Capitalize first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize(' hello')).toBe('Hello')
    expect(capitalize(' hello     ')).toBe('Hello')
})

test('Reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('Perform calculator operations', () => {
    expect(calculator.add(1, 2)).toBe(3)
    expect(calculator.subtract(2, 1)).toBe(1)
    expect(calculator.divide(2, 1)).toBe(2)
    expect(calculator.multiply(1, 2)).toBe(2)
})

 test('CaeserCipherphy', () => {
    expect(caesarCipher('abcdefgzZ')).toBe('bcdefghaA')
    expect(caesarCipher('defend the east wall of the castle')).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
}) 

test('analyze array', () => {
    expect(analyzeArray([1]).length).toBe(1)
    expect(analyzeArray([1,4,9]).max).toBe(9)
    expect(analyzeArray([4, 8]).average).toBe(6)
})