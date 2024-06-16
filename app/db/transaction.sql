-- TRANSACTION OPEN --
-- DROP DATABASE --
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE --
CREATE DATABASE ecommerce_db;

-- CONNECT TO NEW DATABASE --
\c ecommerce_db;

-- DESTROY TABLES IF EXISTS --
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS tag CASCADE;
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS product_tag CASCADE;

-- CREATE TABLE category --
CREATE TABLE category (
    category_id SERIAL,
    category_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (category_id)
);
-- CREATE TABLE tag --
CREATE TABLE tag (
    tag_id SERIAL,
    tag_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (tag_id)
);
-- CREATE TABLE product --
CREATE TABLE product (
    product_id SERIAL, 
    product_name VARCHAR(255) NOT NULL, 
    product_price DECIMAL NOT NULL,
    product_stock INTEGER NOT NULL DEFAULT 10, 
    category_id INTEGER NOT NULL, 
    PRIMARY KEY (product_id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category(category_id) ON DELETE CASCADE ON UPDATE CASCADE
    );
-- CREATE TABLE product_tag --
CREATE TABLE product_tag (
    product_tag_id SERIAL,
    product_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (product_tag_id),
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_tag FOREIGN KEY (tag_id) REFERENCES tag(tag_id) ON DELETE CASCADE ON UPDATE CASCADE
);
-- POPULATE DATABASE TABLES
INSERT INTO "category" ("category_name") 
VALUES 
    ('Shirts'),
    ('Shorts'),
    ('Music'),
    ('Hats'),
    ('Shoes');
-- CATEGORY SEEDED --
INSERT INTO "product" ("product_name", "product_price", "product_stock", "category_id") 
VALUES 
    ('Plain T-Shirt', 14.99, 14, 1),
    ('Running Sneakers', 90, 25, 5),
    ('Branded Baseball Hat', 22.99, 12, 4),
    ('Top 40 Music Compilation Vinyl Record', 12.99, 50, 3),
    ('Cargo Shorts', 29.99, 22, 2);
-- PRODUCT SEEDED --
INSERT INTO "tag" ("tag_name") 
VALUES 
    ('rock music'),
    ('pop music'),
    ('blue'),
    ('red'),
    ('green'),
    ('white'),
    ('gold'),
    ('pop culture');
-- TAG SEEDED --
INSERT INTO "product_tag" ("product_id", "tag_id") 
VALUES 
    (1, 6),
    (1, 7),
    (1, 8),
    (2, 6),
    (3, 1),
    (3, 3),
    (3, 4),
    (3, 5),
    (4, 1),
    (4, 2),
    (4, 8),
    (5, 3);
-- PRODUCT_TAG SEEDED --
-- TRANSACTION CLOSE --