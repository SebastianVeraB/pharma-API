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

describe("GET /", () => {
    it("connects and query Quinapril!", (done) => {
        request(apptest).get("/api/query/generic/Quinapril").expect('[{"generic_name":"Quinapril","product_name":"Quinapril","form":"55111-621"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"55111-622"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"55111-623"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"55111-624"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"62756-310"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"62756-311"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"62756-312"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"62756-313"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"21695-393"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"21695-394"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"63629-1241"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"31722-267"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"31722-268"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"31722-269"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"31722-270"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"71335-1441"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"70934-582"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68180-556"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68180-557"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68180-558"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68180-554"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68001-189"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68001-188"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68001-187"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68001-186"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68001-260"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"69097-839"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"69097-841"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"69097-842"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"69097-843"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"68084-899"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"71335-1707"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"63187-425"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"50090-5165"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"50090-5487"},{"generic_name":"Quinapril","product_name":"Quinapril","form":"50090-4649"}]', done);
    })
});