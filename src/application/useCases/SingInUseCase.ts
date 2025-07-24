import { sign } from "jsonwebtoken";
import { InvalidCredentialsError } from "../errorHandler/InvalidCredentialsError";
import { prismaClient } from "../lib/prismaClient";
import { env } from "../../env";
import { compare } from "bcryptjs";

interface IInput {
  email: string;
  password: string;
}

interface IOutput {
  accessToken: string;
}

export class SignUpUseCase {
  async execute({ email, password }: IInput): Promise<IOutput> {
    const account = prismaClient.accounts.findUnique({
      where: { email },
    });

    if (!account) {
      throw new InvalidCredentialsError();
    }

    const isPasswordValid = compare(password, account.password);

    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }

    const accessToken = sign({ sub: account.id }, env.jwtSecret!, {
      expiresIn: "1d",
    });

    return {
      accessToken,
    };
  }
}
