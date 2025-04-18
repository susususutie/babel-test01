const babel = require('@babel/core')
const path = require('node:path')
const fs = require('node:fs')

/**
 * 或者手动引入插件
 * const arrowFunctionsPlugin = require('@babel/plugin-transform-arrow-functions');
 * plugins: [arrowFunctionsPlugin]
 */

babel.transform(
  `
  const add = (a, b) => a + b;
  console.log(add(1, 2));
`,
  {
    plugins: ['@babel/plugin-transform-arrow-functions'],
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
