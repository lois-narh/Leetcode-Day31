# Integer Division Without Using *, /, or %

This project contains a JavaScript implementation of integer division without using multiplication, division, or modulus operators. It carefully handles edge cases and adheres to 32-bit signed integer limits.

## Problem Statement

Given two integers `dividend` and `divisor`, divide them without using the operators `*`, `/`, or `%`.

Return the **quotient** after dividing `dividend` by `divisor`.

- The integer division should truncate toward zero.
- You must handle overflow and return the maximum 32-bit signed integer value (2³¹ - 1) if the result exceeds this range.

## Function Signature

```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor)
