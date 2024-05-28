create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

CREATE TABLE category (
  id INT NOT NULL auto_increment primary key,
  name VARCHAR(50) NOT NULL 
);

CREATE TABLE program (
  id INT NOT NULL auto_increment primary key,
  title VARCHAR(100) NOT NULL ,
  synopsis TEXT NOT NULL ,
  poster VARCHAR(100) NOT NULL ,
  country VARCHAR(50) NOT null,
  year INT NOT NULL,
  category_id VARCHAR(10) NOT NULL
);