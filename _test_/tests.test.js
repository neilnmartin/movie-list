const app = require("../server/app");
const request = require("supertest");
const connection = require("../db/sequelize_index");

// beforeAll(() => { models.sequelize.sync().then(()=>{ models.sequelize.close(); }) });

// test("two plus two is four", () => {
//   expect(2 + 2).toBe(4);
// });

describe("Tests the API path for movies", () => {
  test("/api/movies should respond to a GET request", done => {
    request(app)
      .get("/api/movies")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("/api/movies should respond to a POST request", done => {
    request(app)
      .post("/api/movies")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
  test("/api/movies should respond to a PATCH request", done => {
    request(app)
      .patch("/api/movies")
      .then(response => {
        expect(response.statusCode).toBe(202);
        done();
      });
  });
  test("/api/movies should respond to a DELETE request", done => {
    request(app)
      .delete("/api/movies")
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });
});

describe("Tests the API path for users", () => {
  test("/api/users should respond to a GET request", done => {
    request(app)
      .get("/api/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("/api/users should respond to a POST request", done => {
    request(app)
      .post("/api/users")
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
  test("/api/users should respond to a PATCH request", done => {
    request(app)
      .patch("/api/users")
      .then(response => {
        expect(response.statusCode).toBe(202);
        done();
      });
  });
  test("/api/users should respond to a DELETE request", done => {
    request(app)
      .delete("/api/users")
      .then(response => {
        expect(response.statusCode).toBe(203);
        done();
      });
  });
});

afterAll(async done => {
  // Closing the DB connection allows Jest to exit successfully.
  connection.close();
  done();
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
