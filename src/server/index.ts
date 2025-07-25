import express from "express";
import { makeSignUpController } from "../factories/makeSignUpContoller";
import { makeSignInController } from "../factories/makeSignInContoller";

const app = express();

app.use(express.json());

app.get("/sign-up", async (req, res) => {
  const signUpController = makeSignUpController();

  const { body, statusCode } = await signUpController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.post("/sign-in", async (req, res) => {
  const singInController = makeSignInController();

  const { body, statusCode } = await singInController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
