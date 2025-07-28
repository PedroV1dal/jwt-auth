import express from "express";
import { makeSignUpController } from "../factories/makeSignUpContoller";
import { makeSignInController } from "../factories/makeSignInContoller";
import { routeAdapter } from "./adapters/routeAdapter";
import { makeListLeadsController } from "../factories/makeListLeadsController";
import { STATUS_CODE } from "../application/errors/statusCode";

import { UnauthorizedError } from "../application/errors/customErrors";

const app = express();

app.use(express.json());

app.post("/sign-in", routeAdapter(makeSignInController()));
app.post("/sign-up", routeAdapter(makeSignUpController()));

app.get(
  "/leads",
  (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(STATUS_CODE.NOT_AUTHORIZED).json({
        error: new UnauthorizedError().message,
      });
    }

    next();
  },

  routeAdapter(makeListLeadsController())
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
