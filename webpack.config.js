const path = require('path');

module.exports = {
    entry: './src/cli.ts',
    devtool: 'inline-source-map',
    target: 'node',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'cli.js',
        libraryTarget: 'this',
        path: path.resolve(__dirname, 'dist'),
    },
};
