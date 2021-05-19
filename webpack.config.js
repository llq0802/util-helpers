const { join } = require('path');
const pkg = require('./package.json');
const babelOptions = require('./.babelrc.js');

const cwd = process.cwd();

const { NODE_ENV } = process.env;

// 连接符转驼峰
function stringToCamelCase(str) {
  return str.replace(/-(\w)/g, function (m, p1) {
    return p1.toUpperCase();
  });
}

// 标识生产环境
const isProd = NODE_ENV === 'production';

// umd全局变量名
const libraryGlobalName = stringToCamelCase(pkg.name);

// 输出文件名
// 开发模式输出带sourcemap的无压缩混淆版
// 生产模式输出压缩版
const outputFilename = isProd ? `${pkg.name}.min.js` : `${pkg.name}.js`;

const devtool = isProd ? 'source-map' : 'eval-source-map';

module.exports = {
  entry: './src/index.js',
  output: {
    library: libraryGlobalName,
    libraryTarget: 'umd',
    path: join(cwd, 'dist'),
    filename: outputFilename,
    umdNamedDefine: true
  },
  target: 'web',
  devtool,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        }
      }
    ]
  }
}