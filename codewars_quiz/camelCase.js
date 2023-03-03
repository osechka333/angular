//"hello case".camelCase() => HelloCase
//"camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    const array = this.split(' ');
    return array.map(item => {
        let newItem = item.toLowerCase();
        const results = newItem.charAt(0).toUpperCase()+ newItem.slice(1);
        return results;
    }).join('');
}
const { assert } = require('chai');

test("Basic tests",() =>{
    assert.strictEqual("test case".camelCase(), "TestCase");
    assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
    assert.strictEqual("say hello".camelCase(), "SayHello");
    assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
    assert.strictEqual("".camelCase(), "");
})