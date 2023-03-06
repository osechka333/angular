export function camelCase(str: string): string {
    const array = str.split(' ');
    return array.map((item: string): string => {
        let newItem = item.toLowerCase();
        const results = newItem.charAt(0).toUpperCase()+ newItem.slice(1);
        return results;
    }).join('');
};

// import solution = require('./solution');
import {assert,config} from "chai";
config.truncateThreshold=0

// describe("Sample Test Cases", function(){
//     it("Should return a CamelCased string", function() {
//         assert.equal(solution.camelCase(""), "");
//         assert.equal(solution.camelCase("test case"), "TestCase");
//         assert.equal(solution.camelCase("camel case method"), "CamelCaseMethod");
//         assert.equal(solution.camelCase("say hello"), "SayHello");
//         assert.equal(solution.camelCase("camel case word"), "CamelCaseWord");
//     });
// });

// OTHER SOLUTIONS
export function camelCase1(str: string): string {
    return str.replace(/\S+/g, (s) => s[0].toUpperCase() + s.slice(1)).replace(/\s+/g, "");
};

export function camelCase2(str: string): string {
    const s: string[] = [];
    str.split(" ").forEach(x => {
        s.push(x.charAt(0).toUpperCase() + x.slice(1));
    });
    return s.join("");
}
