import {IUser} from './user';

export namespace IAuth {
  export type LoginRequest = {
    email: string;
    password: string;
  };

  export type LoginResponse = {
    accessToken: string;
    user: Pick<IUser, 'email'>;
  };
}
