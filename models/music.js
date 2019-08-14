const db = require('./conn');
console.log('checking requirements');

function getAlbums () {
    return db.any(`
    select * from album`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getAlbumsById (id) {
    return db.one(`
    select * from album where id = ${id}`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getArtist () {
    return db.any(`
    select * from artist`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getArtistById (id) {
    return db.one(`
    select * from artist where id = ${id}`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getSong () {
    return db.any(`
    select * from song`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getSongId (id) {
    return db.one(`
    select * from song where id = ${id}`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getSongWriter () {
    return db.any(`
    select * from song_writer`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

function getSongWriterId (id) {
    return db.one(`
    select * from song_writer where id = ${id}`)
    .catch((err) =>{
        console.log("you messed up");
        console.log(err);
    });
};

getAlbums();

module.exports = {
    getAlbums,
    getAlbumsById,
    getArtist,
    getArtistById,
    getSong,
    getSongId,
    getSongWriter,
    getSongWriterId
};