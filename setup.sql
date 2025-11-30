-- Create Database
CREATE DATABASE IF NOT EXISTS dbpraktikum8;
USE dbpraktikum8;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

-- Create Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Products Table
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  deskripsi TEXT DEFAULT NULL,
  harga INT NOT NULL,
  foto VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Dummy Data Users
INSERT INTO users (name, email, password) VALUES 
('Roberto Ramadhan', 'roberto@mail.com', '$2a$10$UTsJEfWY0fqN0HTI859uf2QADWr9ry4g8w/t3/1fyZNZwj0nC2'),
('Josephine', 'josep@mail.com', '$2a$10$UTsJEfWY0fqN0HTI859uf2QADWr9ry4g8w/t3/1fyZNZwj0nC2'),
('Moh. Ilham', 'ilham@mail.com', '$2a$10$UTsJEfWY0fqN0HTI859uf2QADWr9ry4g8w/t3/1fyZNZwj0nC2');

-- Insert Dummy Data Products (10 items)
INSERT INTO products (nama, deskripsi, harga, foto) VALUES 
('Indomie Goreng', 'Mie instan rasa goreng pedas', 2500, 'images/miegoreng.jpg'),
('Mie Sedaap', 'Mie instan rasa soto ayam', 3000, 'images/mie_sedaap.jpg'),
('Laptop Dell', 'Laptop gaming Dell dengan prosesor i7 dan RTX 3060', 10000000, 'images/laptop_dell.jpg'),
('Mouse Logitech', 'Mouse gaming wireless dengan DPI tinggi', 500000, 'images/mouse_logitech.jpg'),
('Keyboard RGB', 'Keyboard mekanik dengan lampu RGB', 800000, 'images/keyboard_rgb.jpg'),
('Monitor LG 24 inch', 'Monitor LED Full HD 24 inci', 2500000, 'images/monitor_lg.jpg'),
('Headphone Sony', 'Headphone nirkabel dengan noise cancellation', 1500000, 'images/headphone_sony.jpg'),
('Charger iPhone', 'Charger cepat 20W untuk iPhone', 500000, 'images/charger_iphone.jpg'),
('USB Cable', 'Kabel USB Type-C 2 meter', 75000, 'images/usb_cable.jpg'),
('SD Card 64GB', 'Kartu memori SD 64GB kecepatan tinggi', 350000, 'images/sdcard_64gb.jpg');
