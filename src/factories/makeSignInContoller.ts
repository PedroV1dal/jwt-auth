import { SingInController } from "../application/controllers/SingInController";
import { makeSignInUseCase } from "./makeSignInUseCase";

/**
 * Factory function to create an instance of SignInController.
 * It encapsulates the creation logic for the SignInUseCase and the controller.
 *
 * @returns {SingInController} An instance of SingInController.
 */

export function makeSignInController() {
  return new SingInController(makeSignInUseCase());
}
