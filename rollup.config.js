import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.jsx',
  output: {
    format: 'cjs',
    file: 'src/app.min.js',
  },
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
    uglify(),
    resolve({
      extensions: ['.jsx'],
    }),
  ],
  external: ['react-dom', 'react-router-dom', 'react'],
};
