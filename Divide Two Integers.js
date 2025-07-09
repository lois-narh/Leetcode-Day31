/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // Define 32-bit integer boundaries
    const MAX_INT = 2**31 - 1;  // 2147483647
    const MIN_INT = -(2**31);   // -2147483648
    
    // Handle edge case
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
    
    // Get sign and work with absolute values
    const sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    let absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    
    let quotient = 0;
    // Use bit manipulation to subtract divisor from dividend
    while (absDividend >= absDivisor) {
        let temp = absDivisor;
        let multiple = 1;
        
        // Double the divisor until it's just less than dividend
        while (absDividend >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }
        
        absDividend -= temp;
        quotient += multiple;
    }
    
    // Apply sign
    quotient = sign * quotient;
    
    // Handle 32-bit integer boundaries
    if (quotient > MAX_INT) return MAX_INT;
    if (quotient < MIN_INT) return MIN_INT;
    
    return quotient;
};