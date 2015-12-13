var express = require("express");

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) =>
    res.send('<!DOCTYPE html> \
        <html lang="en"> \
        <head> \
            <meta charset="UTF-8"> \
            <title>Example app</title> \
        </head> \
            <body> \
            <div id="root"></div> \
            <script src="app.js"></script> \
        </body> \
        </html>')
);

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