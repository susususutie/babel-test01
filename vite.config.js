import babel from 'vite-plugin-babel'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    // babel({
    //   babelConfig: {
    //     // babelrc: false,
    //     // configFile: false,
    //     targets: { chrome: '58' },
    //     presets: ['@babel/preset-env'],
    //   },
    //   // filter,
    //   // include,
    //   // exclude,
    //   // apply,
    //   // loader
    // }),
  ],
  build: {
    minify: false,
    outDir: 'dist',
    target: 'esnext',
    polyfillModulePreload: false,
    // terserOptions: {},
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name]-[extname]',
      },
    },
  },
}
