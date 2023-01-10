import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car_1",
      description: "car_description",
      daily_rate: 110.0,
      license_plate: "car_license_plate",
      fine_amount: 40,
      brand: "car_brand",
      category_id: "car_category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car_name",
      description: "car_description",
      daily_rate: 110.0,
      license_plate: "car_license_plate",
      fine_amount: 40,
      brand: "car_brand_test",
      category_id: "car_category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car_name_test",
      description: "car_description",
      daily_rate: 110.0,
      license_plate: "car_license_plate",
      fine_amount: 40,
      brand: "car_brand",
      category_id: "car_category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "car_name",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "car_name",
      description: "car_description",
      daily_rate: 110.0,
      license_plate: "car_license_plate",
      fine_amount: 40,
      brand: "car_brand",
      category_id: "car_category_id_test",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "car_category_id_test",
    });

    expect(cars).toEqual([car]);
  });
});
