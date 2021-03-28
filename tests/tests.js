process.env.NODE_ENV = "development";

const request = require("supertest"),
  server = require("../index"),
  chai = require("chai"),
  chaiHttp = require("chai-http");

let should = chai.should();
chai.use(chaiHttp);

describe("Check Uer Login", () => {
  // beforeEach((done) => {
  // });

  describe("User API", () => {
    it("it should login", (done) => {
      chai
        .request(server)
        .post("/api/authenticate/login")
        .send({ email: "user@gmail.com", password: "user@123" })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  
  describe("Enroll new User", () => {
    it("it should POST a new user", (done) => {
      var random = Math.floor(Math.random() * 1000 + 1);
      chai
        .request(server)
        .post("/api/authenticate/enrollnewuser")
        .send({
          email: `user${random}@gmail.com`,
          password: "12345678",
          name: "hello00", 
        })
        .end((err, res) => {
          res.should.have.status(201); 
          done();
        });
    });
  });
});
