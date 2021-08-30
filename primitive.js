// primitive data types
// 1.number 
// 2. string 
// 3.boolean
// 4.undefined
// 5.null
// 6.symboll

// non-primitive data types 
// 7.object

let a = 'hello';
let b = a;
// console.log(a, b)
a = 'gello';
// console.log(a, b);

const x = { job: 'web devoloper' }
const y = x;
console.log(x, y,);
// x.job = 'front end devoloper';
y.job = 'front end devoloper'
console.log(x, y);