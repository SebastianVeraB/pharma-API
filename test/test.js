const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const { response } = require("../index");
const apptest = require("../index");

describe("GET /", () => {
    it("responds with on memory mock!", (done) => {
        request(apptest).get("/api/").expect('[{"name":"Neurontin","lab":"Pfizer","active_ingredient":"Gabapentin","strength":"300","Form":"Capsules"}]', done);
    })
});

describe("DB Get Generics", function () {
    describe("GET /", function () {
      it("should return 200 OK with several generic drugs", async function () {
        const response = await request(apptest)
          .get("/api/query/generic/Quinapril")
          .expect(200)
          .expect("Content-Type", /json/);
  
        const drugs = response.body;
        expect(drugs).to.be.an("array");
        expect(drugs).length.to.be.greaterThan(0);
      });
    });
  });

  describe("DB Get Products", function () {
    describe("GET /", function () {
      it("should return 200 OK with several products", async function () {
        const response = await request(apptest)
          .get("/api/query/product/Quetiapine")
          .expect(200)
          .expect("Content-Type", /json/);
  
        const drugs = response.body;
        expect(drugs).to.be.an("array");
        expect(drugs).length.to.be.greaterThan(0);
      });
    });
  });