export class DatabaseError extends Error {
  constructor(
    message: string,
    public readonly originalError: any,
  ) {
    super(message);
    this.name = 'DatabaseError';
  }
}

export class UserError extends Error {
  constructor(
    message: string,
    public readonly originalError: any,
  ) {
    super(message);
    this.name = 'UserError';
  }
}

export class EmailSendingError extends Error {
  constructor(
    message: string,
    public readonly originalError: any,
  ) {
    super(message);
    this.name = 'EmailSendingError';
  }
}
