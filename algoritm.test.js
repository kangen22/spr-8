const { algorithm } = require('./algorithm');

describe('algorithm', () => {
    let solution = new algorithm();

    describe('findMinElement', () => {
        test('should return min element', () => {
            expect(solution.findMinElement([2, 1, 5, 6, 7, 8, 9, 10])).toBe(1);
        });
        test("should throw error for non-positive array", () => {
            expect(() => solution.findMinElement([-1, 0, 3])).toThrow("Array can only contain positive numbers");
        });
        
    });

    describe('findSum', () => {
        test('should return sum of all elements', () => {
            expect(solution.findSum([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toBe(-55);
        });
        test("should throw error for non-negative array", () => {
            expect(() => solution.findSum([1, 2, 3])).toThrow("Array can only contain negative numbers");
        });
    });

    describe('findFibonacci', () => {
        test('should return fibonacci number', () => {
            expect(solution.findFibonacci(10)).toBe(55);
        });
        test("should throw error for negative n", () => {
            expect(() => solution.findFibonacci(-1)).toThrow("n can't be negative");
        });
    });

    describe("calculateCurrent", () => {
        test("should calculate the current correctly", () => {
            expect(solution.findAmperage(10, 5)).toBe(2);
        });
        test("should throw error for zero resistance", () => {
            expect(() => solution.findAmperage(10, 0)).toThrow();
        });
    });
});