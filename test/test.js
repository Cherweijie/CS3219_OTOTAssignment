const chai = require("chai");
const chaiHTTP = require("chai-http");
const should = chai.should();
const app = require("../index");

chai.use(chaiHTTP);

const contactModel = require("../contactModel");
const { expect } = require("chai");

// sample contact created for testing purposes
const sampleContact = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  gender: "Male",
  phone: "91234567"
}

// Used to store contact details to be used in the API testing
let testContactsList = {};

describe("Testing CRUD API for a list of contacts, aka POST, GET, PATCH, DELETE", () => {

  describe("STEP 1: Test POST request", () => {
    it("should create a contact in the contact list", (done) => {
      chai.request(app).post('/api/contacts/').send(sampleContact).end((err,res) => {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.property('message').eql("New contact has been added! :)");
        res.body.should.have.property('data');
        res.body.data.should.have.property('name').eql("John Doe");
        res.body.data.should.have.property('email').eql("johndoe@gmail.com");
        res.body.data.should.have.property('gender').eql("Male");
        res.body.data.should.have.property('phone').eql("91234567");
        testContactsList = res.body.data;
        done();
      });
    }).timeout(7777);
  })

  describe("STEP 2: Test GET request for empty contact list and GET request for a specified contact from a list of contacts", () => {
    it("should retrieve zero contacts from an empty contact list", (done) => {
      chai.request(app).get('/api/contacts/').end((err, res) => {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data.length.should.be.eql(1);
        done();
      })
    })

    it("should retrieve a particular contact specified by its id", (done) => {
      const contactId = testContactsList._id;
      chai.request(app).get('/api/contacts/' + contactId).end((err,res) => {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.a.property('data');
        res.body.data.should.have.property('_id').eql(contactId);
        res.body.data.should.have.property('name').eql("John Doe");
        res.body.data.should.have.property('email').eql("johndoe@gmail.com");
        res.body.data.should.have.property('gender').eql("Male");
        res.body.data.should.have.property('phone').eql("91234567");
        done();
      })
    })
  })

  describe("STEP 3: Test PATCH request", () => {
    it("should update the first contact in the contact list", (done) => {
      const contactId = testContactsList._id;
      const updatedData = {
        name: "Mary Lambert",
        email: "marylambert@gmail.com",
        gender: "Female",
        phone: "92345678",
      }

      chai.request(app).put('/api/contacts/' + contactId).send(updatedData).end((err, res) => {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.a.property('data');
        res.body.data.should.have.property('_id').eql(contactId);
        res.body.data.should.have.property('name').eql("Mary Lambert");
        res.body.data.should.have.property('email').eql("marylambert@gmail.com");
        res.body.data.should.have.property('gender').eql("Female");
        res.body.data.should.have.property('phone').eql("92345678");
        done();
      })
    }).timeout(7777);
  })

  describe("STEP 4: Test DELETE request", () => {
    it("should delete a specified contact in the contact list", (done) => {
      const contactId = testContactsList._id;
      chai.request(app).delete('/api/contacts/' + contactId).end((err, res) => {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property("status").eql("success");
        res.body.should.have.property("message").eql("Contact deleted");
        done();
      })
    })
  })

});