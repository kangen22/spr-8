class algorithm {
    findMinElement(arr) {
        if (arr.some(num => num <= 0)) {
            throw new Error("Array can only contain positive numbers");
        }
        return Math.min(...arr);
    }
      
    findSum(arr) {
        if (arr.some(num => num >= 0)) {
            throw new Error("Array can only contain negative numbers");
        }
        return arr.reduce((acc, num) => acc + num, 0);
    }

    findFibonacci(n) {
        if (n < 0) {
            throw new Error ("n can't be negative");
        } 
        let [a, b] = [0, 1];
        for (let i = 0; i< n; i++) {
            [a, b] = [b, a + b];
        }
        return a;
    }

    findAmperage(voltage, resistance) {
        if (resistance == 0) {
            throw new Error("Resistance can't be 0");
        }
        return voltage / resistance;
    };
}

module.exports = {algorithm };




