import express from "express";
import { makeSignUpController } from "../factories/makeSignUpContoller";
import { makeSignInController } from "../factories/makeSignInContoller";
import { routeAdapter } from "./adapters/routeAdapter";
import { makeListLeadsController } from "../factories/makeListLeadsController";

import { middlewareAdapter } from "./adapters/middlewareAdapter";
import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware";

const app = express();

app.use(express.json());

app.post("/sign-in", routeAdapter(makeSignInController()));
app.post("/sign-up", routeAdapter(makeSignUpController()));

app.get(
  "/leads",
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeListLeadsController())
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
