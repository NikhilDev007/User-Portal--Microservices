/* eslint-disable prettier/prettier */
export class UserCreatedEvent {
    constructor(
      public readonly userName: string,
      public readonly email: string,
      public readonly password: string,
    ) {}
  
    toString() {
      return JSON.stringify({
        userName: this.userName,
        email: this.email,
        password: this.password,
      });
    }
  }