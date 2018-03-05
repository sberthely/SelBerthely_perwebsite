const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const PORT = process.env.PORT || 8080;
var config = require('../webpack.config.js');

const path = require('path');

const app = express();
// app.use(express.static(`${__dirname}/../react-client/dist`));

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// SOLVED IT
app.use(express.static(path.join(__dirname + "/../react-client/dist")));


app.use(require('webpack-hot-middleware')(compiler));


app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
