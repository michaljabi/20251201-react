// @ts-check
/**
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
export function sumTwoNumbers(a = 0, b = 0) {
    return a + b;
} 

// użycie tego:
sumTwoNumbers(20) //=
sumTwoNumbers(20, 3) //=
sumTwoNumbers() //=

// niestety, to też nie generuje błędu w JS:
sumTwoNumbers(20, 3, 300, 499) //=
sumTwoNumbers(20, '3') //=