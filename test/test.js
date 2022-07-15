const request = require("supertest");
const apptest = require("../app");

describe("GET /", () => {
    it("responds with on memory mock!", (done) => {
        request(apptest).get("/api/").expect('[{"name":"Neurontin","lab":"Pfizer","active_ingredient":"Gabapentin","strength":"300","Form":"Capsules"}]', done);
    })
});