# CS3219_OTOTAssignment Task B

This repository was created to provide documentation for CS3219 OTOT assignments AY20/21 Semester 1

- Student Name: Cher Wei Jie
- Matriculation Number: A0190123U

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
- Verify that Postman is downloaded from [here](https://www.postman.com/downloads/).

Next, once everything has been set up, follow these steps to ensure that the program runs as expected before using Postman to perform `GET`, `POST`, `UPDATE` and `DELETE`.

1. Clone and download this repository's code.
2. Change directory to the root directory of the downloaded project using `cd YOUR_PROJECT_DIRECTORY_HERE`.
3. Run `npm install` in the root directory of the downloaded project.
4. Open another terminal or command-line window and run `mongod`.
5. Switch back to the previous terminal in the root directory and run `nodemon index`.
6. Go to http://localhost:8080/api/contacts to verify if the program was successfully set up.
7. The page should display `{"status":"success","message":"Contacts retrieved successfully","data":[]}`.
8. You are now ready to use Postman to perform `GET`, `POST`, `PUT` and `DELETE`.

## Task B1: Running a simple Javascript backend REST API to GET and POST

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

## Task B2: To run tests locally and via Travis

## Installation Guide:

1. [NodeJS](https://nodejs.org/en/download/)
2. [Mocha](https://mochajs.org/#getting-started)
3. [Chai](https://dev.to/bushraalam/introduction-to-testing-with-mocha-and-chai-57po)
4. [Travis](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci-using-github)

Ensure that these packages are installed before **forking this repository** to your local repository.

## To Run Tests:

### Running Tests Locally:

1. Ensure that you have followed and done all instructions presented in task B1.
2. Ensure that the the localhost link http://localhost:8080/api/contacts/ is empty; i.e. no contacts available in the mongoDB database.
3. In this project's root directory, run `npm run test` to check that **all 5 tests pass**.

### Running Tests on Travis:

1. Ensure that you have followed this [link](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci-using-github) provided above in the installation guide from Travis using your Github account.
2. Once you have followed the steps to link your github account, you may make some local changes to this existing repository and push to your remote repository.
3. If you have allowed Travis to run on this remote repository, a Travis build should be triggered.
4. You may use this [link](https://travis-ci.com/) to track all Travis builds across your approved repositories on GitHub.

## Task B3: To use Automated Deployment via CD tools:

### The serverless service (AWS Lambda) can be accessed with the following links:

1. https://7zqrfikkpj.execute-api.us-east-1.amazonaws.com/dev/ - Landing page for service to test if it was successfully deployed.
2. https://7zqrfikkpj.execute-api.us-east-1.amazonaws.com/dev/api/contacts - For CRUD requests to be done in Postman; similar to task B1.

To perform POST, GET, UPDATE and DELETE, simply follow the instructions in Task B1 and use this [link](https://7zqrfikkpj.execute-api.us-east-1.amazonaws.com/dev); instead of using http://localhost:8080/api/contacts/ from Task B1.

After testing CRUD requests, please remember to clear all entries from the database so that the implemented tests in Task B2 can be passed without any issues.

### For setting up Travis:

1. Run a build for this repository and visit https://www.travis-ci.com to look at the build.
2. Click on 'More options' on the top right corner of the build and click on 'Settings'.
3. Scroll down to 'Environment Variables' and ensure that 'All Branches' is selected.
4. In 'Environment Variables', add the following fields which are provided in the submission PDF:

- `AWS_ACCESS_KEY_ID` - <RETRIEVED_FROM_SUBMISSION_PDF>
- `AWS_SECRET_ACCESS_KEY` - <RETRIEVED_FROM_SUBMISSION_PDF>

## Acknowledgements

## For Task B1:

1. Referenced this awesome [article](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d) posted on Medium.
2. Referenced this [link](https://expressjs.com/en/starter/hello-world.html) which can be found in CS3219 OTOTAssignment Task B1 resource links.

## For Task B2:

1. Referenced the following links from CS3219 OTOTAssignment Task B2 resource links:

- https://mochajs.org/#getting-started
- https://medium.com/@asciidev/testing-a-node-express-application-with-mocha-chai-9592d41c0083
- https://dev.to/bushraalam/introduction-to-testing-with-mocha-and-chai-57po

2. Additional links for Travis set-up:

- https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
- https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci-using-github
- https://medium.com/@nodejs/choosing-the-node-js-versions-for-your-ci-tests-hint-use-lts-89b67f68d7ca

## For Task B3:

1. Links for setting up a serverless service:

- https://www.serverless.com/blog/serverless-express-rest-api
- https://www.serverless.com/framework/docs/providers/aws/guide/credentials/

2. Links for setting up MongoDB Atlas:

- https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
- https://dev.to/adnanrahic/a-crash-course-on-serverless-apis-with-express-and-mongodb-193k

3. Links for setting up Travis:

- https://blog.travis-ci.com/2019-05-30-setting-up-a-ci-cd-process-on-github
