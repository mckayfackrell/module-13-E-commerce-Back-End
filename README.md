# module-13-E-commerce-Back-End
## Description

An application called E-commerce Back End which allows for a user to create, update, and delete data in a database. 

## Gifs
| Terminal | Tags | Categories | Products |
|---------|---------|---------|---------|
| ![terminal](https://user-images.githubusercontent.com/110206514/212444468-eab41f39-e2c7-4360-bd6b-767e8184a95a.gif) | ![tags](https://user-images.githubusercontent.com/110206514/212444452-ef18c83f-6c59-45d7-b339-e8fe57e088ff.gif) | ![categories](https://user-images.githubusercontent.com/110206514/212444465-17c55552-888b-46c6-9054-58042cc1789a.gif) | ![products](https://user-images.githubusercontent.com/110206514/212444466-f5a34599-d2b8-44fd-be65-951615f52336.gif) |

## Installation 
The user should clone the repository from GitHub. This application requires MySQL2 and Sequelize. 

You’ll need to use the MySQL2 and Sequelize packages to connect your Express.js API to a MySQL database and the dotenv package to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the schema.sql file in the db folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

## Usage

The user will first run schema and seed commands to create a seeded database.

When the user invokes the application, the server is started and the Sequelize models are synced to the MYSQL database.

The user can then open API Get routes in Insomnia Core for categories, products, or tags. 

The data will be displayed in a formatted JSON. 

The user can then use the corresponding API POST, PUT, and DELETE routes in Insomnia Core to create, update and delete data in the database.

## Authors and acknowledgment

@Xandromus is the original creator of the source code. I, McKay Fackrell have made changes to the code to accomplish the homework criteria.

## License

Please refer to the LICENSE in the repo.

## Project status

A week long course that should be submitted on December 15, 2022. Once submitted changes will most likely cease as new repositories going over new coding features will be added and more focus will be dedicated to them.

## Homework Acceptance Criteria

GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands

THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application

THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia Core for categories, products, or tags

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core

THEN I am able to successfully create, update, and delete data in my database
