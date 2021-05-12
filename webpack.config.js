const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  }, // Añadimos nuestro punto de salida
  resolve: {
    extensions: [".js", ".jsx"], // Añadimos el soporte para la extencion de JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Ignora la carpeta de node_modules
        use: {
          loader: "babel-loader", // Utiliza la configuracion de Babel
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../public'),
    //       to: "public"
    //     },
    //   ],
    //   options: {
    //     concurrency: 100,
    //   },
    // }),
  ],
};
