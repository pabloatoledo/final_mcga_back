# Project Title

Exam 01 for MCGA - 04/10/22

## Description

This is a exam for MCGA and the purpose is make CRUD operations with http methods.
The languages used were Node.js, NPM & Express.js and database in No-SQL structure in MongoDB, using Mongoose as ODM and Mongo Atlas as cloud service for the DB.

The database contains field for save ID, name, price, stock and description of products.

## Getting Started

This project contain these endpoints:

* 1: GET
    * 1.1: /exam_01_mcga/products: this return the message Connection OK if the response of the server was succefull with code 200.
    * 1.2: /exam_01_mcga/products/all: this return all the products of the database.
    * 1.3: /exam_01_mcga/products/name/"name of product": this search the information about the product with name wanted.
    * 1.4: /exam_01_mcga/products/id/"id of product": this search the information about the product with id wanted.

* 2: POST
    * 2.1: /exam_01_mcga/products: this function is for add a new product in the database. The structure of the command is (all are required):
        {
            "name":"name of product",                   ==> type string
            "price":"price of product",                 ==> type number
            "stock":"stock of product",                 ==> type number
            "description": "description of product"     ==> type string
        }

* 3: DELETE
    * 3.1: /exam_01_mcga/products/"id of product": this function is for fisic delete of product.

* 4: PUT
    * 4.1: /exam_01_mcga/products/"id of product": this function is for update a field or fields of product existing in the database. The Syntax is the same as point 2.1, but with the new values.

### Dependencies

dotenv: version 16.0.3
express: version 4.18.1
mongoose: version 6.6.3
routers: version 0.1.4

### Installing

None

## Authors
Pablo Toledo

## Version History
* 0.1
    * Initial Release

## License

None