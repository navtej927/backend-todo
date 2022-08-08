const request = require("supertest");
const { todoApp } = require("./app");

describe("todoApp Endpoints", () => {
  it("should respond with succes", async () => {
    const res = await request(todoApp).get("/health");
    console.log("res", res);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ success: true, version: "1.0.0" });
  });
});
