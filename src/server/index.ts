import express from "express";
import { SingUpController } from "../application/controllers/SingUpController";
import { SignUpUseCase } from "../application/useCases/SignUpUseCase";
import { SingInController } from "../application/controllers/SingInController";
import { SignInUseCase } from "../application/useCases/SingInUseCase";

const app = express();

app.use(express.json());

app.get("/sign-up", async (req, res) => {
  const SALT = 10;
  const signUpUseCase = new SignUpUseCase(SALT);
  const signUpController = new SingUpController(signUpUseCase);

  const { body, statusCode } = await signUpController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.post("/sign-in", async (req, res) => {
  const singInController = new SingInController(new SignInUseCase());

  const { body, statusCode } = await singInController.handle({
    body: req.body,
  });

  res.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
