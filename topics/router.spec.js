const request = require("supertest");

const server = require("../api/server.js");

describe("topics router", function() {
  describe("GET /api/topics", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/topics")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should have 'topics' as the router value", function() {
      return request(server)
        .get("/api/topics")
        .then(res => {
          expect(res.body.router).toBe("topics");
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/topics")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
