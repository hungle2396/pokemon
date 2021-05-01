const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    // entry: {
    //     main: "./src/ts/app.ts",
    //     vendor: "./src/ts/vendor.ts"
    // },
    entry: ["babel-polyfill", "./src/jsx/Pokemon/index.jsx"],
    devtool: "hidden-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new CleanPlugin.CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        })
    ]
};
