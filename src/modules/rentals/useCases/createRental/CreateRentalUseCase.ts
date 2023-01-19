import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  carId: string;
  userId: string;
  expectedReturnDate: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    carId,
    userId,
    expectedReturnDate,
  }: IRequest): Promise<void> {
    // - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
    const rentalOpenToCar = await this.rentalsRepository.findOpenRentalByCar(
      carId,
    );

    if (rentalOpenToCar) {
      throw new AppError("There's a rental in progress for this car!");
    }

    // - Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      userId,
    );

    if (rentalOpenToUser) {
      throw new AppError("There's a rental in progress for this user!");
    }

    // - O aluguel deve ter duração mínima de 24 horas.
  }
}

export { CreateRentalUseCase };
