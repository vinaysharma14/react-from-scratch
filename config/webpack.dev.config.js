const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // specifies entry point of our app
  entry: './src/index.js',

  // specifes the location and file name of build
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js'
  },

  // webpack dev server config
  devServer: {
    // development server port number
    // defaults to 8080
    port: 3000,

    // open browse with the port number
    // when npm start command is executed
    open: true,

    // asking the server to fallback
    // to index.html in the event that
    // a requested resource cannot be found
    historyApiFallback: true,
  },

  // specifies various loaders
  module: {
    rules: [
      {
        // regex to test for js or JSX files
        // that will be pre processed by a loader
        test: /\.(js|jsx)$/,

        // try to avoid exclude and
        // prefer include such as
        // exclude: /node_modules/,
        include: [path.resolve('src')],

        use: {
          // babel loader helps
          // webpack transpile es6 javascript
          // to equivalent es5 javascript
          // which is understandable by browser
          loader: 'babel-loader',

          // babel plugins can be added into our
          // webpack config file this way
          // but I have preferred to
          // maintain a dedicated .babelrc
          // config file in route directort
          // of our project

          // options: {
          //     presets: ["@babel/preset-react", "@babel/preset-env"],
          //     plugin: ["@babel/plugin-proposal-class-properties"]
          // },
        }
      },
      {
        // regex to test for css and scss files
        test: /\.(s*)css$/,

        // this is loader chaining
        // it is executed in reverse order
        // either bottom to top or
        // right to left like here
        use: [
          // style-loader creates a <style> tag in
          // the page's <head> element containing
          // those styles resolved by css-loader,
          // css-loader, less-loader, etc.
          // thus injecting css into DOM
          'style-loader',

          // used to resolves css
          // es6 module imports into
          // es5 require statements
          'css-loader',

          // Loads a Sass/SCSS file
          // and compiles it to CSS
          'sass-loader'
        ]
      },
      {
        // regex to test for files with
        // the extensions mentione in
        // the regex test
        test: /\.(wav|png|jpe?g|mp3|gif|svg)$/,
        use: ['file-loader?name=[name].[ext]'],
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },

  // an array of various webpack plugins
  plugins: [

    // used to generate HTML dynamically with a
    // <script> tag including our bundled js file
    new HtmlWebPackPlugin({
      // specfies path to the HTML file
      // where react-dom renders our app
      // in the dom element with the
      // target id specified in
      // ReactDOM.render() method
      template: './public/index.html',

      // specifies name of file
      // in our build directory
      filename: 'index.html',

      // adds favicon to the final
      // build directory
      favicon: './public/favicon.ico',

      // appends a unique webpack compilation
      // hash to all included scripts and CSS files
      // this is useful for cache busting
      // which allows your visitors to receive
      // the most recently updated files without
      // having to perform a hard refresh or
      // clear their browser cache
      hash: true,

      /// minimizing code and markup in your
      // web pages and script files to reduce
      // oad times and bandwidth usage on websites.
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      }
    })
  ]
}