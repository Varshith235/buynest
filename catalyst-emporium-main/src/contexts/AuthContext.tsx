import { createContext, useContext, useState, ReactNode } from "react";

interface UserType {
  name: string;
  email: string;
  role: "admin" | "user";
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);

  const login = (username: string, password: string) => {
    // Admin login
    if (username === "admin123" && password === "admin123") {
      setIsAuthenticated(true);
      setUser({ name: "Admin User", email: "admin@store.com", role: "admin" });
      return true;
    }

    // User login - check localStorage
    const storedUser = JSON.parse(localStorage.getItem("userData") || "{}");
    if (username === storedUser.email && password === storedUser.password) {
      setIsAuthenticated(true);
      setUser({ name: storedUser.email, email: storedUser.email, role: "user" });
      return true;
    }

    return false; // invalid credentials
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};