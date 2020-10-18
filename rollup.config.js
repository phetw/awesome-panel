import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
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
  {
    input: ['src/awesome-panel.js'],
    output: {
      file: 'build/awesome-panel.es5.js',
      format: 'esm',
    },
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**',
      }),
      babel({
        runtimeHelpers: true,
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              targets: {
                browsers: '> 1%, IE 11, not dead',
              },
            },
          ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      terser(),
      filesize(),
    ],
  },
];
