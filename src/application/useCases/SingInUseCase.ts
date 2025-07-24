import { sign } from "jsonwebtoken";
import { prismaClient } from "../lib/prismaClient";
import { env } from "../../env";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "../errors/customErrors";

interface IInput {
  email: string;
  password: string;
}

interface IOutput {
  accessToken: string;
}

export class SignInUseCase {
  async execute({ email, password }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findUnique({
      where: { email },
    });

    if (!account) {
      throw new InvalidCredentialsError();
    }

    const isPasswordValid = await compare(password, account.password);

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
