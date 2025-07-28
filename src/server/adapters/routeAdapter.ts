import { Request, Response } from "express";
import { IController } from "../../application/interfaces/IController";

/**
 * Adapts an Express request to the controller's handle method and sends the response.
 *
 * @param {IController} controller - The controller instance to handle the request.
 * @returns {Function} A function that takes an Express request and response object.
 */

export function routeAdapter(controller: IController) {
  return async (req: Request, res: Response) => {
    console.log("Route adapter called with request:", req);
    const { body, statusCode } = await controller.handle({
      body: req.body,
      params: req.params,
      accountId: req.metadata?.accountId,
    });

    res.status(statusCode).json(body);
  };
}
