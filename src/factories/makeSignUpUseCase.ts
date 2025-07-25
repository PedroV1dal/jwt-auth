import { SignUpUseCase } from "../application/useCases/SignUpUseCase";

/**
 * Factory function to create an instance of SignUpUseCase.
 * It encapsulates the creation logic for the SignUpUseCase with a predefined SALT value.
 *
 * @returns {SignUpUseCase} An instance of SignUpUseCase.
 */

export function makeSignUpUseCase() {
  const SALT = 10;

  return new SignUpUseCase(SALT);
}
