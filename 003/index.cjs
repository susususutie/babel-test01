const babel = require('@babel/core')
const path = require('node:path')
const fs = require('node:fs')

babel.transform(
  `
  // 1.
  const add = (a, b) => a + b;
  console.log(add(1, 2));
  // 2.
  console.log(\`a + b = \${a + b}\`);
  // 3.
  const { a, b } = { a: 1, b: 2 };
  console.log(a + b);
  // 4.
  class MyClass {
    constructor(name) {
      this.name = name;
    }
    sayHello() {
      console.log(\`Hello, \${this.name}!\`);
    }
  }
  const obj = new MyClass('Babel');
  obj.sayHello();
  // 5.
  export const a5 = 1;
  export const b5 = 2;
  export function add5(x, y) {
    return x + y;
  }
  // 6.
  const a6 = 1;
  {
    const a6 = 2;
  }
`,
  {
    plugins: [
      // 1. 箭头函数
      '@babel/plugin-transform-arrow-functions',
      // 2. 模板字符串
      '@babel/plugin-transform-template-literals',
      // 3. 解构赋值
      '@babel/plugin-transform-destructuring',
      // 4. 将 ES6 的类语法转换为 ES5 的构造函数和原型链，会生成多个辅助函数：
      // _classCallCheck _defineProperties _createClass _toPropertyKey _toPrimitive
      '@babel/plugin-transform-classes',
      // 5. 将 ES6 的模块语法（import/export）转换为 CommonJS 模块语法（require/module.exports）会在文件顶部加上
      // "use strict";
      // Object.defineProperty(exports, "__esModule", {
      //   value: true
      // });
      // exports.a5 = void 0;
      // exports.add5 = add5;
      '@babel/plugin-transform-modules-commonjs',
      // 6. 用于将 ES2015（ES6）中的块级作用域（let 和 const）转换为 ES5 的作用域
      '@babel/plugin-transform-block-scoping',
    ],
  },
  (error, result) => {
    if (error) {
      console.error('Error during transformation:', error)
      return
    }

    // 写入到 dist.js 文件中
    const outputFilePath = path.join(__dirname, 'dist.js')
    fs.writeFile(outputFilePath, result.code, writeError => {
      if (writeError) {
        console.error('Error writing to file:', writeError)
      } else {
        console.log(`Successfully wrote transformed code to ${outputFilePath}`)
      }
    })
  }
)
