var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT || 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: __dirname + '/public',
  hot: true,
  historyApiFallback: true
}).listen( port, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:' + port );
});
