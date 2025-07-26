import express from "express";
import { makeSignUpController } from "../factories/makeSignUpContoller";
import { makeSignInController } from "../factories/makeSignInContoller";
import { routeAdapter } from "./adapters/routeAdapter";

const app = express();

app.use(express.json());

app.post("/sign-in", routeAdapter(makeSignInController()));
app.post("/sign-up", routeAdapter(makeSignUpController()));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
