import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async findOpenRentalByCar(carId: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.car_id === carId && rental.end_date === null,
    );
  }

  async findOpenRentalByUser(userId: string): Promise<Rental> {
    return this.rentals.find(
      rental => rental.user_id === userId && rental.end_date === null,
    );
  }
}

export { RentalsRepositoryInMemory };
