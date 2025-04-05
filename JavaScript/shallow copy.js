// Values VS References
// Primitives pass values;
let a = 5;
let b = a;
b+=10;
console.log(a);
console.log(b);

// Structural types use References
let xArr = [1,2,3];
let yArr = xArr; // yArr is not copy of xArr it is reference of xArr. change in yArr will effect xArr
yArr.push(5);
console.log(xArr);
console.log(yArr);

// Mutable VS Immutable

// primitive are Immutable
let name = "cat";
name[0] = "b"; // Nope
console.log(name);

// Reassigning is not same as mutable
name = "bat";
console.log(name);

// Structures contain mutable Data
let arr = [5,6,7,8];
arr[0] = 4;
console.log(arr);

// Shallow copy VS Deep copy (clone)

// Shallow copy with spread operator (...)
let bArr = [5,6,7]
let aArr = [...bArr, 8,9];
aArr[0] = 1; // do not effect bArr
console.log(bArr);
console.log(aArr);

// Shallow copy with object.assign()
let cArr = Object.assign([],bArr);
cArr[0] = 2;
console.log(cArr);

// Note in shallow copy if array contains nested array that nested array still pass by reference
let nestedArr = [1,2,3,[4,5,6]];
let copyNestedArr = [...nestedArr,8,9];
nestedArr[0] = 2; // do not change second array
nestedArr[3][0] = 8; // chenges second array
console.log(nestedArr);
console.log(copyNestedArr);

// object.freeze() makes object immutable but it is a shallow freeze
Object.freeze(nestedArr);
console.log(nestedArr);
nestedArr[0] = 4; // can not modify as it is freezed
nestedArr[3][0] = 10; // can be modify because as object.freeze() is  shallow freeze
console.log(nestedArr);

// Deep copy avoid above problems 
    // Note => JSON,parse(JSON.stringify(arr)) dose not support undefined, functions or Date
let dummyArr = [1,2,3,[4,5,6]]
let deepCopyDummyArr = JSON.parse(JSON.stringify(dummyArr));
dummyArr[0] = 5;
dummyArr[3][0] = 5;
console.log(dummyArr);
console.log(deepCopyDummyArr);