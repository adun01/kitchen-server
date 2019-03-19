const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
    entry: ['webpack/hot/poll?100', './app.ts'],
    watch: true,
    target: 'node',
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?100'],
        }),
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['npm run build']})
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
    },
};
