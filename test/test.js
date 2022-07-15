const request = require("supertest");
const apptest = require("../index");

describe("GET /", () => {
    it("responds with on memory mock!", (done) => {
        request(apptest).get("/api/").expect('[{"name":"Neurontin","lab":"Pfizer","active_ingredient":"Gabapentin","strength":"300","Form":"Capsules"}]', done);
    })
});
describe("GET /", () => {
    it("connects and query DB!", (done) => {
        request(apptest).get("/api/query/product/65483-991").expect('[{"generic_name":"allopurinol","product_name":"ZYLOPRIM","form":"TABLET"}]', done);
    })
});