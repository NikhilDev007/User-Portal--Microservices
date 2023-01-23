/* eslint-disable prettier/prettier */
export class GetUserRequest {
    constructor(public readonly email: string) {}
  
    toString() {
      return JSON.stringify({
        email: this.email,
      });
    }
  }
  