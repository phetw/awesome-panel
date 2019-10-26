import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: ['src/index.js'],
    output: {
        file: 'build/index.js',
        format: 'esm',
    },
    plugins: [
        resolve(),
        babel({
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'false',
                        targets: {
                            browsers: '> 1%, IE 11, not dead',
                        },
                    }
                ]
            ]
        })
    ]
};