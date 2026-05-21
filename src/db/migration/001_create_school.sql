-- Create Database if not exist --
CREATE DATABASE IF  NOT EXISTS school_management
CHARACTER SET utf8mb4  COLLATE  utf8mb4_unicode_ci;


-- use Database to create a new table --
USE school_management;
CREATE TABLE IF NOT EXISTS schools(
      id INT  AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(250) NOT NULL,
      address TEXT NOT NULL,
      latitude DOUBLE NOT NULL,
      longitude DOUBLE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
      INDEX idx_lat_lng (latitude, longitude)

)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;