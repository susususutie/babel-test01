"use strict";

// es2015 plugin-transform-block-scoping
const b = 2;
// es2016 plugin-transform-exponentiation-operator
let x1 = 10 ** 2;
// es2017 plugin-transform-async-to-generator
async function foo() {}
// es2018 plugin-transform-object-rest-spread
let {
  x,
  y,
  ...z
} = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
};
console.log(x, y, z);
// es2018 plugin-transform-async-generator-functions
async function* agf() {
  await 1;
  yield 2;
}
// es2020 plugin-transform-optional-chaining plugin-transform-nullish-coalescing-operator
const obj = {};
console.log(obj?.foo, obj ?? 1);
// es2020 plugin-syntax-bigint
console.log(BigInt(123) + BigInt(123));
// es2021 plugin-transform-numeric-separator
let budget = 1_000_000_000_000_000_000_000;
// es2022 plugin-transform-private-property-in-object
class Foo {
  #bar = "bar";
  test(obj) {
    return #bar in obj;
  }
}