import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { iAuthContext } from "@/types/contexts";
import { iSingIn, iSingUp, iUser } from "@/types/userAccess";
import { useRouter } from "next/navigation";
import { Notify } from "@/components/Notify";
import { login } from "@/services/login.service";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoged, setIsLoged] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>({} as iUser);
  const { push } = useRouter();

  useEffect(() => {   
    setIsLoged(JSON.parse(localStorage.getItem("isLoged") as string));
  }, []);

  const singIn = (values: iSingIn) => {
    return new Promise((resolve) => { 
      resolve(true);
      
      localStorage.setItem("isLoged", "true");
      
      const response = login(values);
      
      setUser(response);
      
      localStorage.setItem("user", JSON.stringify(response));

      setIsLoged(true);

      setTimeout(() => push("/"), 4000);

      Notify("success", "Login Concluido!");
    });
  };

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    if (hasUser) {
      setUser(JSON.parse(hasUser));
    }
  }, []);

  const logOut = () => {
    setUser({} as iUser);
    setIsLoged(false);
    localStorage.setItem("isLoged", "false");
    localStorage.setItem("user", "{}");
  }

  const singUp = (values: iSingUp) => {};

  return (
    <AuthContext.Provider value={{ singIn, user, isLoged, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
