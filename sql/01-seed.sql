--removes a database if it already
DROP DATABASE IF EXISTS my_database;

-- build a database
CREATE DATABASE nc_database;

-- connect my database
 \c nc_database

-- create some tables
CREATE TABLE genres(
  g_name VARCHAR PRIMARY KEY,
  g_description TEXT
);

CREATE TABLE artists(
  -- SERIAL is an auto-increasing INTEGER <3
  a_id SERIAL PRIMARY KEY,
  a_name VARCHAR
);

-- insert some data
-- selecting the tables I want data inserted into
INSERT INTO genres (g_name, g_description) 
VALUES
-- first row
('pop', 'The songs you love to hate'),
-- second row 
('rock', 'Ready for the guitar solo?'), 
-- third row
('country', 'The song you hate to love');

INSERT INTO artists (a_name)
VALUES 
('Taylor Swift'),
('Dolly Parton'),
('Black Sabbath'),
('Leonard Sky');

SELECT * FROM artists;
SELECT * FROM genres;