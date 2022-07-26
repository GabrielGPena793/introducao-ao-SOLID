import { Response, Request } from "express";
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;
    let user: User;

    try {
      user = this.createUserUseCase.execute({ email, name });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }

    return response.status(201).send(user);
  }
}

export { CreateUserController };
