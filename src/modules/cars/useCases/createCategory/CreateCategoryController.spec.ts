import request from "supertest";
import { DataSource } from "typeorm";

import { app } from "@shared/infra/http/app";

import AppDataSourceConnection from "@shared/infra/typeorm/data-source";

let connection: DataSource;

describe("Create Category Controller", () => {
  beforeEach(() => {
    connection = AppDataSourceConnection();
  });

  it("should be able to create a new category", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "Category Supertest description",
    });

    expect(response.status).toBe(201);
  });
});
