# ecom-router
## Server Side Testing Routes with Insomnia
![node version](https://img.shields.io/badge/v22-node-blue?logo=nodedotjs) ![npm version](https://img.shields.io/badge/version-v10.5.1-npm.svg?style=flat&logo=npm&label=npm&labelColor=yellow&color=red) ![postgresql version](https://img.shields.io/npm/v/pg?style=flat&logo=postgresql&logoColor=aqua&logoSize=auto&label=postgresql-npm) 

[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) 

<p align="left">
    <img src="https://img.shields.io/github/languages/top/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/repo-size/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/issues/strahinjapopovic/node-gen-readme?style=flat&color=blue" />
    <img src="https://img.shields.io/github/last-commit/strahinjapopovic/node-gen-readme?style=flat&color=blue" >
</p>
    
<p align="left">
    <a href="https://gist.github.com/Julien-Marcou/156b19aea4704e1d2f48adafc6e2acbf"><img src="https://img.shields.io/badge/es2023-javascript-blue?logo=javascript" /></a>
    <a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/v22-node-blue?logo=nodedotjs" /></a>
    <a href="https://docs.npmjs.com/about-npm#getting-started"><img src="https://img.shields.io/badge/v10-npm-blue?logo=npm" /></a>
    <a href="https://www.npmjs.com/package/json5"><img src="https://img.shields.io/badge/v2-json5-blue?logo=npm" /></a>
</p>

<p align="left">
    <a href="https://twitter.com/stanpopovic"><img alt="Twitter: stanpopovic" src="https://img.shields.io/twitter/follow/stanpopovic.svg?style=social" target="_blank" /></a>
    <a href="https://www.youtube.com/@strahinja-popovic-ch"><img alt="Youtube: strahinja-popovic-ch" src="https://img.shields.io/badge/YouTube-red?&logo=youtube&style=social" target="_blank" /></a>
</p>

## Employee data application with `PostgreSQL-v16.3`, `node.js v22.0.0`, `npm-v10.5.1` and `ps-v8.12.0`

<a id="table-of-content"></a>
## Table of Content (TOC)

- [Table of Content](#table-of-content)
- [Description Info](#description-info)
- [GitHub Repository](#github-repository)
- [Installation Process](#installation-process)
- [Usage Info](#usage-info)
- [Contributing Guidelines](#contributing-guidelines)
- [Test Instructions](#test-instructions)
- [Demonstration on YouTube](#demonstration-on-youtube)
- [License](#license)
- [Questions and Contacts](#questions-and-contacts)

<a id="description-info"></a>
## Description Info

### Application `ecom-router` represents a testing server-side routes application with insomnia an open-source, cross-platform, desktop API client that allows testing URL API Routers of any app. In this particular example it has been used `GET`, `POST`, `PUT` and `DELETE` methods for testing. Application uses `PostgreSQL-v16.3` relational databse, `Node.js-v22`.0, `NPM-v10.5.1` as server package manager and other npm packages like: `pg-v8.12.0`, `express-v4.17.1`, `sequelize-v5.22.5`, `dotenv-v8.6.0` and for testing platform uses `Insomnia-v9.2.0`.

[<img src="./app/images/Insomnia-desktop-platform.PNG" width="1200" alt="Git Bash Terminal screenshot." />](./app/images/Insomnia-desktop-platform.PNG)

<a id="github-repository"></a>
## GitHub Repository 
[![GitHub](https://img.shields.io/badge/logo-GitHub-white?logo=github&logoColor=black&style=flat&label=ecom-router&labelColor=blue&color=red)](https://github.com/strahinjapopovic/ecom-router)

## Git Bash Terminal setting up origin main
[<img src="./app/images/git-bash-remote-origin-main-border.png" width="1200" alt="Git Bash Terminal screenshot." />](./app/images/git-bash-remote-origin-main-border.png)

<a id="installation-process"></a>
## Installation Process
### Because we need PostgreSQL database it should be installed at local machine drive and then loaded into npm node module packages. Installation process for postgresql we can find here [PostgreSQL Databse Installation](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads). During the installation process default port should be `5432`. After database is installed localy npm pg packages `pg-v8.12.0` should be loaded into node modules over cli terminal.

```bash
$ npm install pg
```
After packages are loaded database credentials should be populated into `.env` file like username, password, database host and database name. Check .env file for details. Also, there is a file `~db/transaction.sql` that can be used to set database structure and to populate database with testing seeds. Check file `transaction.sql`. It can be runned as follows (run):

```bash
$ psql -U postgres
```

### CLI PostgreSQL Populate Database Output 
```console
$ psql -U postgres # it should prompt ypur password for username postgres and insert password
Password for user postgres:
psql (16.2)
postgres=# \i ./db/transaction.sql
DROP DATABASE
CREATE DATABASE
You are now connected to database "ecommerce_db" as user "postgres".
psql:db/transaction.sql:12: NOTICE:  table "category" does not exist, skipping
DROP TABLE
psql:db/transaction.sql:13: NOTICE:  table "tag" does not exist, skipping
DROP TABLE
psql:db/transaction.sql:14: NOTICE:  table "product" does not exist, skipping
DROP TABLE
psql:db/transaction.sql:15: NOTICE:  table "product_tag" does not exist, skipping
DROP TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
INSERT 0 5
INSERT 0 5 
INSERT 0 8 
INSERT 0 12
ecommerce_db=# 
```
Otherwise you can run seeds (`~/seeds/index.js`) over bash terminal as follows
```bash
$ node seeds/seeds.js
```
Alternatively,
```bash
$ npm run seed # automate executable shortcuts scripts at package.json
```
### Run seed output:
[<img src="./app/images/seed-run-border.png" width="1200" alt="Git Bash Terminal screenshot." />](./app/images/seed-run-border.png)

<a id="usage-info"></a>
## Usage Info

As a small application it can be helpful for testing and practising purpose but on the other side it has some atributes of serious programming application.

<a id="contributing-guidelines"></a>
## Contributing Guidelines

Currentlly, at this stage there is no contributors but for more information any enquiry can be reffered to Question and Contact section.

<a id="test-instructions"></a>
## Test Instructions

Application runs by invoking command `$ npm start` at `~/ecom-router/app>` directory. Before running application, download compressed repo from githaub and installl packages globaly or at application root directory from the section [Installation Process](#installation-process). 

```bash
$ node server.js 
```

Alternatively,
```bash
$ npm start 
```

All automate executable scripts are stored at root directory `~/ecom-router/app>` in `package.json` file.
```json
"scripts": {
    "test": "jest",
    "start": "node server.js",
    "watch": "nodemon server.js",
    "seed": "node seeds/index.js"
  },
```

<a id="demonstration-on-youtube"></a>
## Demonstration on [YouTube](https://youtu.be/K3DA7IOKb3Y)

Demonstration of the application can be visited below.

[<img src="./app/images/insomnia-border.png" width="400" alt="Node.js image as thumbnail for YouTube demo video." />](https://youtu.be/K3DA7IOKb3Y)

## License

Copyright © 2024, [codexdev](https://github.com/strahinjapopovic). Released under the [MIT License](./LICENSE).

<a id="questions-and-contacts"></a>
## Questions and Contacts

Questions about application can be reffered to the author's [GitHub account](https://github.com/strahinjapopovic) or you can [Contact Me](mailto:spope.mails@gmail.com) directly over an email.
