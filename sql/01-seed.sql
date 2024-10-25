--removes a database if it already
DROP DATABASE IF EXISTS nc_database;

-- build a database
CREATE DATABASE nc_database;

-- connect my database
\c nc_database

-- create some tables
CREATE TABLE genres(
  genre_name VARCHAR PRIMARY KEY,
  genre_description TEXT
);

INSERT INTO genres(genre_name, genre_description) 
VALUES
-- first row
('pop', 'The songs you love to hate.'),
-- second row 
('rock', 'Ready for the guitar solo?'), 
-- third row
('country', 'The song you hate to love');


CREATE TABLE artists(
  -- SERIAL is an auto-increasing INTEGER <3
  artist_id SERIAL PRIMARY KEY,
  artist_name VARCHAR
);

-- insert some data
-- selecting the tables I want data inserted into

INSERT INTO artists (artist_name)
VALUES 
('Taylor Swift'),
('Dolly Parton'),
('Black Sabbath'),
('Leonard Sky');

CREATE TABLE songs (
  song_id SERIAL PRIMARY KEY,
  song_title VARCHAR NOT NULL,
  release_year INT,
  -- the following are FOREIGN KEYS, they MUST make REFERENCE to their derived column values that exists alreadyc
  artist_id INT REFERENCES artists(artist_id),
  genre VARCHAR REFERENCES genres(genre_name)
);

INSERT INTO songs (song_title, release_year, artist_id, genre)
VALUES
('Cruel Summer', 2019, 1, 'pop'),
('Paranoird', 1970, 3, 'rock'),
('Free Bird', 1973, 3, 'rock'),
('Jolene', 1973, 2, 'country'),
('Free Bird', 2023, 2, 'rock'),
('Wildest Dreams', 2014, 1, 'pop'),
('Our Song', 2006, 1, 'country'),
('9 to 5', 1980, 2, 'country');

-- MY TABLES: 

-- SELECT * FROM artists;
-- SELECT * FROM genres;
-- SELECT * FROM songs;
-- SELECT * FROM playlists;
-- SELECT * FROM songs_playlists; /* <-- junction table to connect 'songs' & 'playlists'*/

/*
-- the following won't be a new table but just a print
SELECT song_title, genre_description, artist_name
FROM songs
JOIN artists
-- songs & artists TABLE can be JOIN ON their common FOREIGN KEY
ON songs.artist_id = artists.artist_id;
JOIN genres
ON songs.genre = genres.genre_name;
*/

CREATE TABLE playlists(
  playlist_id SERIAL PRIMARY KEY,
  playlist_name VARCHAR,
  is_public BOOLEAN
);

INSERT INTO playlists (playlist_name, is_public)
VALUES
('David Ruming Jamz', true),
('Roses Gaming anthems', false);

CREATE TABLE songs_playlists (
  playlist_id INT REFERENCES playlists(playlist_id),
  song_id INT REFERENCES songs(song_id)
);

INSERT INTO songs_playlists (playlist_id, song_id)
VALUES
(1, 1),
(1, 3),
(1, 6),
(1, 7),
(2, 1),
(2, 2),
(2, 4),
(2, 5),
(2, 7);


SELECT songs.song_title, COUNT(playlists.playlist_id)
-- FROM songs /* <--- LEFT TABLE */
FROM songs
LEFT JOIN songs_playlists
-- stopping at this join will return duplicates
ON songs.song_id = songs_playlists.song_id
-- continuing to connect values with their playlist_name
LEFT JOIN playlists
ON songs_playlists.playlist_id = playlists.playlist_id
GROUP BY songs.song_id;


-- SELECT COUNT(song_title) FROM songs;