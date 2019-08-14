const express = require('express');
const music = require('./models/music');
const app = express();
const port = 3000;

app.get('/album', (req, res)=>{
    console.log('testrun bb');
    const allAlbums = music.getAlbums();
    allAlbums
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});








app.listen(port);