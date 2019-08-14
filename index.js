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


app.get('/album/:id',(req,res)=> {
    console.log(req.params.id)
    const theId = parseInt(req.params.id, 10);
    const albumId = music.getAlbumsById(theId);
    albumId
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});

app.get('/artist', (req, res)=>{
    console.log('testrun bb');
    const allArtists = music.getArtist();
    allArtists
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});

app.get('/artist/:id',(req,res)=> {
    console.log(req.params.id)
    const theId = parseInt(req.params.id, 10);
    const ArtistId = music.getArtistById(theId);
    ArtistId
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});

app.get('/song', (req, res)=>{
    console.log('testrun bb');
    const allSongs = music.getSong();
    allSongs
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});

app.get('/song/:id',(req,res)=> {
    console.log(req.params.id)
    const theId = parseInt(req.params.id, 10);
    const SongId = music.getSongId(theId);
    SongId
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});

app.get('/songwriter', (req, res)=>{
    console.log('testrun bb');
    const allSongwriters = music.getSongWriter();
    allSongwriters
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});

app.get('/songwriter/:id',(req,res)=> {
    console.log(req.params.id)
    const theId = parseInt(req.params.id, 10);
    const SongWriterId = music.getSongWriterId(theId);
    SongWriterId
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});



app.listen(port);