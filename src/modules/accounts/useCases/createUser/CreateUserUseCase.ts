import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    username,
    driver_license,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    this.usersRepository.create({
      name,
      username,
      driver_license,
      email,
      password,
    });
  }
}

export { CreateUserUseCase };
