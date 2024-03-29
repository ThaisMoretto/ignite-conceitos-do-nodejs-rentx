import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFiles {
  filename: string;
}

class UploadImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadCarImageUseCase = container.resolve(UploadCarImagesUseCase);

    const imagesName = images.map(file => file.filename);

    await uploadCarImageUseCase.execute({
      car_id: id,
      images_name: imagesName,
    });

    return response.status(201).send();
  }
}

export { UploadImagesController };
