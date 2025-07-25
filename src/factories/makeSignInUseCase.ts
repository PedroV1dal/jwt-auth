import { SignInUseCase } from "../application/useCases/SingInUseCase";

/**
 * Factory function to create an instance of SignInUseCase.
 * It encapsulates the creation logic for the SignInUseCase.
 *
 * @returns {SignInUseCase} An instance of SignInUseCase.
 */

export function makeSignInUseCase() {
  return new SignInUseCase();
}
