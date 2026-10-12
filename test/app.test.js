const request = require("supertest");
const app = require("../server");

describe("DevOps Web Application", () => {
  test("home page works", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain(
      "Welcome to my DevOps Web Application"
    );
  });

  test("health endpoint works", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });
});