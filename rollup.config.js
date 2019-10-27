import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize'

export default [
    {
        input: ['src/index.js'],
        output: {
            file: 'build/index.js',
            format: 'esm',
        },
        plugins: [
            resolve(),
            terser(),
            filesize()
        ]
    },
    {
        input: ['src/index.js'],
        output: {
            file: 'build/index.legacy.js',
            format: 'esm',
        },
        plugins: [
            resolve(),
            babel({
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            useBuiltIns: false,
                            modules: false,
                            targets: {
                                browsers: '> 1%, IE 11, not dead',
                            },
                        }
                    ]
                ]
            }),
            terser(),
            filesize()
        ]
    }
];