const request = require("supertest");
const app = require("../src/app");
const { connectDB } = require("../src/config/connectionDB");
require("dotenv").config();
describe("Task API", () => {
  let token;

  // Test to validar login
  beforeAll(async () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const response = await request(app)
      .post("/api/auth/login")
      .send({ user: "test1234", password: "test2024" });

    if (response.status != 201) {
      throw new Error("Error, token isn`t get in response");
    }

    token = response.body.token;
  });

  // test to validate create only
  it("Test create a new task successfully", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Tarea de prueba",
        description: "Descripción de la tarea de prueba",
        dueDate: "2024-09-30",
        userId: 1,
        order: 1,
      });

    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty("title", "Tarea de prueba");
  });
});
