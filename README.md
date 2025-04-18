## 001

直接使用 `@babel/core` 转换代码字符串，并将转换后的代码写入到 `dist.js` 文件中，因为未启用任何插件，转换后的代码与转换前相同。

```bash
node index.cjs
# Successfully wrote transformed code to /home/sutie/babel-test01/001/dist.js
```

## 002

安装插件，用以转换对应的代码。比如 `@babel/plugin-transform-arrow-functions` 插件是用来转换箭头函数。安装插件后直接将插件名写在 plugins 配置中，Babel 会在内部自动加载插件。也可以手动通过 require 引入插件。

## 003

通过安装丰富的插件，能将代码转换成需要的形式。
