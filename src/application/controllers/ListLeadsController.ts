import { STATUS_CODE } from "../errors/statusCode";
import { IController, IRequest, IResponse } from "../interfaces/IController";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    console.log("ListLeadsController.handle called with request:", request);

    return {
      statusCode: STATUS_CODE.OK,
      body: {
        leads: [
          {
            id: "1",
            name: "John Doe",
            email: "ze@gmail.com",
          },
          {
            id: "2",
            name: "Jane Doe",
            email: "jane@gmail.com",
          },
          {
            id: "3",
            name: "Alice Smith",
            email: "alice@gmail.com",
          },
        ],
      },
    };
  }
}
