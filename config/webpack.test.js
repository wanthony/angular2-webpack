module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|eof|svg|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        loader: 'null'
      }
    ]
  }
};
