# CS3219_OTOTAssignment

This repository was created to provide documentation for CS3219 OTOT assignments AY20/21 Semester 1

Student Name: Cher Wei Jie
Matriculation Number: A0190123U

## Installation Guide

### Setting up before writing a simple REST API:

#### Install the following packages necessary for a simple REST API demonstration.

- [NodeJS](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Postman](https://www.postman.com/downloads/)
- [Express](https://expressjs.com/en/starter/installing.html)

## Verification Guide

Follow these steps before proceeding on to the tutorial.

- Verify that NodeJs is installed on your computer using `node -v`.
- Verify that NPM is installed using `npm -v`.
- Verify that Express is installed using `express --version`.
- Verify that MongoDB is installed using `mongo --version`.
- Verify that Postman is downloaded from [here] (https://www.postman.com/downloads/).

Next, once everything has been set up, follow these steps to ensure that the program runs as expected before using Postman to perform `GET`, `POST`, `UPDATE` and `DELETE`.

1. Clone and download this repository's code.
2. Change directory to the root directory of the downloaded project using `cd YOUR_PROJECT_DIRECTORY_HERE`.
3. Run `npm install` in the root directory of the downloaded project.
4. Open another terminal or command-line window and run `mongod`.
5. Switch back to the previous terminal in the root directory and run `nodemon index`.
6. Go to http://localhost:8080/api/contacts to verify if the program was successfully set up.
7. The page should display `{"status":"success","message":"Contacts retrieved successfully","data":[]}`.
8. You are now ready to use Postman to perform `GET`, `POST`, `PUT` and `DELETE`.

## Running a simple Javascript backend REST API to GET and POST

1. Launch Postman
2. Upon successful launch, enter http://localhost:8080/api/contacts as the request URL.
3. `GET` should be the default action in Postman; so press send to perform a `GET` operation from the input request URL.
4. Next, to perform `POST`, click into `Body` and select the `x-www-form-url-encoded` option.
5. In a general scenario, you may select any key-value pairs to perform a `POST` operation to the request URL. However, for this example, we will be using `name`, `email`, `phone` and `gender`.
6. Fill up the respective key-value pairs and press send after selecting `POST` from the dropdown box.

## Running a simple Javascript backend REST API to UPDATE and DELETE

1. Launch Postman
2. Upon successful launch, enter http://localhost:8080/api/contacts/{contact_id} as the request URL; `{contact_id}` should be the hashed id of the contact object previously created from the `POST` method.
3. You may use the `GET` method to get the `{contact_id}` saved in the contacts list.
4. To perform `UPDATE`, select either `PATCH` or `PUT` from the dropdown box and type the corresponding key-value pair(s) to be modified/updated; press send.
5. To perform `DELETE`, select `DELETE` from the dropdown box and press send.

## Acknowledgements

### For Task B1

- Used the steps from this awesome [article](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d) posted on Medium.

### For Task B2

- Used these amazing guides to set up mocha, Chai and Travis.
