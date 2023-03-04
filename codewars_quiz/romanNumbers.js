function solution(number)
{
    let result   = '';
    let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    decimals.map(function (value, index) {
        while (number >= value) {
            result += roman[index]; // += to have M+CM+XC -> by the index
            number -= value; // 1999 - 1000 and go on
        }
    });

    alert(result);
}

solution(1999);
solution(1000);
solution(4);


import { solution } from './solution';
import { assert } from 'chai';

test('basic', function(){
        assert.strictEqual(solution(1000), 'M')
        assert.strictEqual(solution(4), 'IV')
        assert.strictEqual(solution(1), 'I')
        assert.strictEqual(solution(1990), 'MCMXC')
        assert.strictEqual(solution(2008), 'MMVIII')
        assert.strictEqual(solution(1444), 'MCDXLIV')
});