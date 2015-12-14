import Express from 'express';
import mongoose from 'mongoose';
import * as user from './api/user';
import * as userModel from './models/user';

var db = mongoose.connect('mongodb://localhost/users', {safe: true});

var app = new Express();
app.set('port', process.env.PORT || 3000);
app.use(Express.static(__dirname + '/../public'));

app.use((req, res, next) => {
  req.models = {
    User: userModel
  };
  return next();
});

app.get('/', (req, res) =>
  res.send('<!DOCTYPE html> \
        <html lang="en"> \
        <head> \
            <meta charset="UTF-8"> \
            <title>Example app</title> \
        </head> \
            <body> \
            <div id="root"></div> \
            <script src="http://localhost:3001/public/app.js"></script> \
        </body> \
        </html>')
);

app.get('/api/users', user.get);

//404 catch-all handler (middleware)
app.use((req, res) => {
  res.status(404);
  res.send('404');
});

// 500 error handler (middleware)
app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500);
  res.send('500');
});

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});