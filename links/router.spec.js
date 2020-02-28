const request = require("supertest");

const server = require("../api/server.js");

describe("links router", function() {
  describe("GET /api/links", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/links")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should have 'links' as the router value", function() {
      return request(server)
        .get("/api/links")
        .then(res => {
          expect(res.body.router).toBe("links");
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/links")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
