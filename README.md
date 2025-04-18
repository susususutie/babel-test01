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

## 004

一个个安装插件太过繁琐，Babel 官方提供了一系列预设`preset`，其中已经包含了大量需要的插件，只需要对预设进行配置就能转换成指定目标的代码，避免一个个手动安装、使用插件。与插件类似，可以直接传递预设名称，也可以手动引入后使用。

安装 `@babel/preset-env` 后更改 `targets`，就能自动将代码转换成指定浏览器运行的版本。
