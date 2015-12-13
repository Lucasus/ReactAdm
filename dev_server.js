var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./config/webpack.dev');

var app = express();
var compiler = webpack(config);

var host = config.host || 'localhost';
var port = (config.port + 1) || 3001;

var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

app.use(require('webpack-dev-middleware')(compiler, serverOptions));

app.use(require('webpack-hot-middleware')(compiler));

//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, 'static/index.html'));
//});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
