CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY,
  username VARCHAR(300),
  message VARCHAR(100),
  roomname VARCHAR(300)
);

INSERT INTO messages (id, username, message, roomname)
  VALUES(1, 'Minggui', 'I am not Matthew', 'lobby');

INSERT INTO messages (id, username, message, roomname)
  VALUES(2, 'Matthew', 'totally not Minggui', 'lobby');



CREATE TABLE users (

  id INT PRIMARY KEY,
  username VARCHAR(100)
);


INSERT INTO users (id, username)
  VALUES(1, 'Minggui');

INSERT INTO users (id, username)
  VALUES(2, 'Matthew');
/* Create other tables and define schemas for them here! */

/*
make table for users
*/


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

