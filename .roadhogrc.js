const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/svg'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  // "theme": "./theme.config.js",
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
      ],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
      ],
      extraPostCSSPlugins: [
        pxtorem({
          rootValue: 100,
          propWhiteList: [],
        }),
      ],
    }
  },
  proxy: {
    "/static/image": {
      "target": "http://127.0.0.1:8012/",
      "headers":{
        "host":"127.0.0.1"
      }
    },
    "/wx": {
      "target": "http://127.0.0.1:8012/",
      "headers":{
        "host":"127.0.0.1"
      }
    },
    "/qywx": {
      "target": "http://127.0.0.1:8012/",
      "headers":{
        "host":"127.0.0.1"
      }
    },
    "/api": {
      "target": "http://127.0.0.1:8012/",
      "headers":{
        "host":"127.0.0.1"
      }
    }
  }
}