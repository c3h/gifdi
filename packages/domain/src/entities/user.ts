import {ICreatable} from '../generics/creatable';
import {IIndexable} from '../generics/indexable';
import {IUpdatable} from '../generics/updatable';

export type IUser = IIndexable & ICreatable & IUpdatable & IUser.Props;

export namespace IUser {
  export type Props = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  export type Edit = Partial<Props>;
}
