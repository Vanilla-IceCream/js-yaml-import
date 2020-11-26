import path from 'path';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const pkg = require('./package.json');

export default {
  input: path.join(__dirname, 'src/index.js'),
  output: [
    { file: pkg.main, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'esm' },
  ],
  external: ['fs', 'path', ...Object.keys(pkg.dependencies)],
  plugins: [
    getBabelOutputPlugin({ configFile: path.resolve(__dirname, 'babel.config.js') }),
    resolve(),
    commonjs(),
  ],
};
