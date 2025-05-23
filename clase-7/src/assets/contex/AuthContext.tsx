import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  checking = "checking",
  authenticated = "authenticated",
  unauthenticated = "unauthenticated",
}

enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

interface User {
  role: UserRole;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  isChecking: boolean;
  token?: string;
  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
  user?: User;
}

export const AuthContext = createContext({} as AuthState);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    setUser({
      role: UserRole.Viewer,
      name: "Erik Buitron",
      email: email,
      password: password,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isChecking: status === AuthStatus.checking,
        loginWithEmailPassword,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
