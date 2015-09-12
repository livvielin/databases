CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (id int not null auto_increment, user varchar(255), message varchar(255), room varchar(255), PRIMARY KEY (ID));

CREATE TABLE users (id int not null auto_increment, user varchar(255), primary key (ID));

CREATE TABLE rooms (id int not null auto_increment, room varchar(255), primary key (ID));

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

