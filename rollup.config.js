import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: ['src/index.js'],
    output: {
        file: 'build/index.js',
        format: 'umd',
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
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
                ['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
            ],
        })
    ]
};