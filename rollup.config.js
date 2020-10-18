import resolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: ['src/awesome-panel.js'],
    output: {
      file: 'build/awesome-panel.js',
      format: 'esm',
    },
    plugins: [resolve(), terser(), filesize()],
  },
];
