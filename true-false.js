/*
falsy
false
number=0
empty string
undefined
null
NAN
------------------------------------
truthy 
true
any positive or negative number
any string including single white space,:'0'
empty array[]
empty object
*/
let x = {};
console.log('value of x', x)
if (x) {

    console.log('variable is truthy');
}
else {
    console.log('variable is falsy');
}