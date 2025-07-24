import { AccountAlreadyExistError } from "../errorHandler/AccountAlreadyExistError";
import { prismaClient } from "../lib/prismaClient";

interface IInput {
  name: string;
  email: string;
  password: string;
}

type IOutput = void;

export class SignUpUseCase {
  async execute({ name, email, password }: IInput): Promise<IOutput> {
    const accountAlreadyExist = await prismaClient.accounts.findUnique({
      where: { email },
    });

    if (accountAlreadyExist) {
      throw new AccountAlreadyExistError();
    }

    await prismaClient.accounts.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
}
