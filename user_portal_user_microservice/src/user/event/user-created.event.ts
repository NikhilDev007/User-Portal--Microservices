/* eslint-disable prettier/prettier */
export class UserCreatedEvent {
    constructor(
      public readonly userName: string,
      public readonly email: string,
      public readonly password: string,
    ) {}
}