import { verify } from "jsonwebtoken";
import { STATUS_CODE } from "../errors/statusCode";
import {
  IData,
  IMiddleware,
  IRequest,
  IResponse,
} from "../interfaces/IMiddleware";
import { env } from "../../env";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IRequest): Promise<IResponse | IData> {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: STATUS_CODE.NOT_AUTHORIZED,
        body: {
          error: "Invalid access token",
        },
      };
    }

    try {
      console.log({ authorization });
      const [bearer, token] = authorization.split(" ");

      if (bearer !== "Bearer") {
        throw new Error();
      }

      const payload = verify(token, env.jwtSecret!);

      return {
        statusCode: STATUS_CODE.OK,
        body: {
          accountId: payload.sub,
        },
      };
    } catch (error) {
      return {
        statusCode: STATUS_CODE.NOT_AUTHORIZED,
        body: {
          error: error.message || "Invalid access token",
        },
      };
    }
  }
}
