import { STATUS_CODE } from "../errors/statusCode";
import { IController, IRequest, IResponse } from "../interfaces/IController";
import { z, ZodError } from "zod";
import { SignInUseCase } from "../useCases/SingInUseCase";
import { InvalidCredentialsError } from "../errors/customErrors";
import { parseZodIssues } from "../utils/parseZodIssuesErrors";

const schema = z.object({
  email: z.email().min(2),
  password: z.string().min(8),
});

export class SingInController implements IController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { email, password } = schema.parse(body);

      const acessToken = await this.signInUseCase.execute({ email, password });

      const { accessToken } = acessToken;

      return {
        statusCode: STATUS_CODE.OK,
        body: {
          accessToken,
        },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: STATUS_CODE.BAD_REQUEST,
          body: parseZodIssues(error.issues),
        };
      }

      if (error instanceof InvalidCredentialsError) {
        return {
          statusCode: STATUS_CODE.NOT_AUTHORIZED,
          body: {
            error: "Invalid Credentials",
          },
        };
      }

      return {
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
        body: { error: "Internal server error" },
      };
    }
  }
}
