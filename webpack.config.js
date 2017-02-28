var path = require('path');
var webpack = require('webpack');

const HMR_PORT = 3333;

const hmr = [
    `webpack-dev-server/client?http://localhost:${HMR_PORT}`,
    'webpack/hot/only-dev-server'
];

module.exports = {
    entry: hmr.concat(['./src/index.tsx']),
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js', '.jsx', '.json'
        ],
        modules: [
            "node_modules", path.join(__dirname, './src')
        ]
    },
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: path.resolve(__dirname, './dist'),

        publicPath: '/static/'
        // necessary for HMR to know where to load the hot update chunks
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
                exclude: path.join(__dirname, './node_modules'),
                include: path.resolve(__dirname, "./src"),
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globallyƒy

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin()
        // do not emit compiled assets that include errors
    ],

    devServer: {
        host: 'localhost',
        port: HMR_PORT,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true
        // enable HMR on the server
    }
}
