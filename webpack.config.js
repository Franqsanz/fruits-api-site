const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Elegimos nuestro punto de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  }, // Añadimos nuestro punto de salida
  resolve: {
    extensions: [".js", ".jsx", ".mdx"], // Añadimos el soporte para la extencion de JSX
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // Ignora la carpeta de node_modules
        use: {
          loader: "babel-loader" // Utiliza la configuracion de Babel
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
        test: /\.mdx?$/,
        use: [
          "babel-loader",
          {
            loader: "@mdx-js/loader",
            options: {
              // eslint-disable-next-line global-require
              mdPlugins: [require("remark-highlight.js")]
            }
          }
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
