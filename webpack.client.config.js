const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Define the directory where the bundled code will be saved
const buildDirectory = 'dist';
const outputDirectory = buildDirectory + '/client';

module.exports = {
    mode: 'development', // set the mode to development

    entry: './src/client/index.js', // The entry point for the application

    output: {
        path: path.join(__dirname, outputDirectory), // the location where the bundled code will be saved
        filename: 'bundle.js' // the name of the bundled file
    },

    module: {
        rules: [
            {
                test: /\.js$/,  // match files with a .js extension
                exclude: /node_modules/, // exclude node_modules directory
                use: {
                    loader: 'babel-loader' // use babel-loader to transpile the code
                }
            },
            {
                test: /\.css$/, // match files with a .css extension
                use: ['style-loader', 'css-loader'] // use style-loader and css-loader to load css files
            }
        ]
    },

    devServer: {
        port: 3000, // the development server will run on port 3000
        open: true // automatically open the browser when the server starts
    },
    plugins: [
        new CleanWebpackPlugin({ // Clean dist folder before each build
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, buildDirectory)]
        }),
        new HtmlWebpackPlugin({ // Generate index.html file and include the bundled javascript
            template: './public/index.html'
        })
    ]
};
