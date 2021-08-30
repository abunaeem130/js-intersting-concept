/*
undefined
1.variable not assign
2.function did not return
3.just wrote return but didn't return anything
4.parameter that is not pass
5.property that doesn't exist  in the object
6.accessing array element out of range
7.accessing deleted  array element
8. explicitly set value to undefined
*/
let first;
// console.log(first);
function second(x, y) {
    // document.getElementById('sum');
}
const result = second(4, 6);
// console.log(result);
function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return
    }
    const fun = a * b;
    return sum;
}
const forth = add(33, 56);
// console.log(forth);
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result
}
double(81);
const fifth = { name: 'sogir uddin', age: 34, location: 'bandorbon' };
// console.log(fifth.phone);


const sixth = [42, 45, 87, 98,];
// console.log(sixth[4]);
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObject = { name: 'samad', profession: null, }