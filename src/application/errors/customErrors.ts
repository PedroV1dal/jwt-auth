export abstract class AuthError extends Error {
  name: string;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class InvalidCredentialsError extends AuthError {
  constructor(message: string = "Invalid credentials") {
    super(message);
  }
}

export class AccountAlreadyExistError extends AuthError {
  constructor(message: string = "Account already exists") {
    super(message);
  }
}

export class UnauthorizedError extends AuthError {
  constructor(message: string = "Unauthorized") {
    super(message);
  }
}
