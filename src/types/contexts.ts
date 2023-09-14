import { iSingIn, iUser } from "./userAccess";

export interface iAuthContext {
  singIn: (values: iSingIn) => void;
  user: iUser | null;
  isLoged: boolean;
  logOut: () => void;
}
