import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/mgsformvalidation.min.js',
    format: 'umd',
    name: 'mgsformvalidation',
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
};