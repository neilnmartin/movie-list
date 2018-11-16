const app = require("../server/app");
const request = require("supertest");

// beforeAll(() => { models.sequelize.sync().then(()=>{ models.sequelize.close(); }) });

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

describe("Test the API path", () => {
  test("/api/movielist should respond to a GET request", done => {
    request(app)
      .get("/api/movielist")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("/api/movielist should respond to a POST request", done => {
    request(app)
      .post("/api/movielist")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
  test("/api/movielist should respond to a PATCH request", done => {
    request(app)
      .patch("/api/movielist")
      .then(response => {
        expect(response.statusCode).toBe(202);
        done();
      });
  });
  test("/api/movielist should respond to a DELETE request", done => {
    request(app)
      .delete("/api/movielist")
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });
});

// describe("Test the API path", () => {
//   test("/towatch/towatchlist should respond to a GET request", done => {
//     request(app)
//       .get("/towatch/towatchlist")
//       .then(response => {
//         expect(Array.isArray(response.body)).toBe(true);
//         done();
//       });
//   });
// });
