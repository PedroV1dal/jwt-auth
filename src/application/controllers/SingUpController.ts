import { STATUS_CODE } from "../errors/statusCode";
import { IController, IRequest, IResponse } from "../interfaces/IController";
import { z, ZodError } from "zod";
import { SignUpUseCase } from "../useCases/SignUpUseCase";
import { AccountAlreadyExistError } from "../errors/customErrors";
import { parseZodIssues } from "../utils/zodError.issues";

const schema = z.object({
  name: z.string().min(2),
  email: z.email().min(2),
  password: z.string().min(8),
});

export class SingUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { email, name, password } = schema.parse(body);

      await this.signUpUseCase.execute({ name, email, password });

      return {
        statusCode: STATUS_CODE.NO_CONTENT,
        body: null,
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: STATUS_CODE.BAD_REQUEST,
          body: parseZodIssues(error.issues),
        };
      }

      if (error instanceof AccountAlreadyExistError) {
        return {
          statusCode: STATUS_CODE.CONFLICT,
          body: { error: "Account already exists" },
        };
      }

      return {
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
        body: { error: "Internal server error" },
      };
    }
  }
}
