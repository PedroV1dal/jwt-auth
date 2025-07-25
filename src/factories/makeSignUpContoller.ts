import { SingUpController } from "../application/controllers/SingUpController";
import { makeSignUpUseCase } from "./makeSignUpUseCase";
/**
 * Factory function to create an instance of SignUpController.
 * It encapsulates the creation logic for the SignUpUseCase and the controller.
 *
 * @returns {SingUpController} An instance of SingUpController.
 */
export function makeSignUpController() {
  return new SingUpController(makeSignUpUseCase());
}
