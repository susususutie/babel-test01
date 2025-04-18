// ES2017 features

// 1. async/await
const asyncFunction = async () => {
  return "Hello, World!";
};
asyncFunction().then((result) => {
  console.log(result);
});

// 2. Object.entries and Object.values
const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
const values = Object.values(obj);
console.log(entries); // [['a', 1], ['b', 2]]
console.log(values); // [1, 2]

// 3. String.prototype.padStart and String.prototype.padEnd
const str = "5";
const paddedStart = str.padStart(3, "0");
const paddedEnd = str.padEnd(3, "0");
console.log(paddedStart); // 005
console.log(paddedEnd); // 500

// 4. Object.getOwnPropertyDescriptors
const obj2 = {
  a: 1,
  b: 2,
};
const descriptors = Object.getOwnPropertyDescriptors(obj2);
console.log(descriptors);
// {
//   a: {
//     value: 1,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   b: {
//     value: 2,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

// 5. Trailing commas in function parameter lists and calls
function example(a, b,) {
  console.log(arguments.length);
  return a + b;
}
example(1, 2,); // 3
// 6. Shared memory and atomics
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer);
const atomics = new Int32Array(buffer);
Atomics.store(int32View, 0, 42);
const value = Atomics.load(int32View, 0);
console.log(value); // 42