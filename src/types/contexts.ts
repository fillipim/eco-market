import { iCartProduct, iProduct } from "./stores";
import { iSingIn, iUser } from "./userAccess";

export interface iAuthContext {
  singIn: (values: iSingIn) => void;
  user: iUser | null;
  isLoged: boolean;
  logOut: () => void;
}

export interface iCartContext {
  addToCart: (product: iCartProduct) => void;
  cartProducts: iCartProduct[];
  removeToCart: (id: number) => void;
  total: number;
}