import { AccountAlreadyExistError } from "../errors/customErrors";
import { prismaClient } from "../lib/prismaClient";
import { hash } from "bcryptjs";

interface IInput {
  name: string;
  email: string;
  password: string;
}

type IOutput = void;

export class SignUpUseCase {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt;
  }

  async execute({ name, email, password }: IInput): Promise<IOutput> {
    const accountAlreadyExist = await prismaClient.account.findUnique({
      where: { email },
    });

    if (accountAlreadyExist) {
      throw new AccountAlreadyExistError();
    }

    const hashedPassword = await hash(password, this.salt);

    await prismaClient.account.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }
}
