import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "123456",
  database: "rentx",
  entities: [Category, Specification],
  migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Initializing the database...");
  })
  .catch(err => console.log(err));
