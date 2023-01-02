import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserControler = new CreateUserController();
const updateUserAvatarControler = new UpdateUserAvatarController();

usersRoutes.post("/", createUserControler.handle);
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarControler.handle,
);

export { usersRoutes };
