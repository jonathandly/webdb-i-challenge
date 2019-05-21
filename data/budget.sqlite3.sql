--
-- File generated with SQLiteStudio v3.2.1 on Tue May 21 17:32:56 2019
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: accounts
CREATE TABLE accounts (id INTEGER PRIMARY KEY, name STRING UNIQUE, budget INTEGER CONSTRAINT required NOT NULL);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
