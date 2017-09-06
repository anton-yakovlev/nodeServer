const express = require('express');
const bodyParser = require('body-parser');
const ArtistController = require('./controllers/artists');
const app = express();

let db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/artists', ArtistController.all);
app.get('/artists/:id', ArtistController.findById);
app.put('/artists/:id', ArtistController.updateById);
app.delete('/artists/:id', ArtistController.deleteById);
app.post('/artists', ArtistController.new);

db.connect('mongodb://localhost:27017/myapi', function (error) {
    if (error) {
        console.error(error);
    }
    app.listen(8081);
});

