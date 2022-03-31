import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const router = useRouter();

  useEffect(() => checkUserLoggedIn(), []);

  // Register user
    const register = async ({ username, email, password }) => {
      const res = await fetch(`${API_URL}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password
        }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setUser(data.user);
        router.push("/account/dashboard");
      } else {
        setError(data.message);
        setError(null);
      }
    };

  const login = async ({email, password} ) => {
    console.log('secondary login');
    console.log(email, password);
    const res = await fetch(`${API_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });
    const data = await res.json();

    console.log(data);

    if (res.ok) {
      setUser(data.user);
      setSuccess(data.message);
      console.log(user);
      router.push("/");
    } else {
      setError(data.message);
      setError(null);
    }
};

  // Logout user
  const logout = async () => {
    const res = await fetch(`${API_URL}/auth/local`, {
		method: "POST",
	});
    const data = await res.json();

    if (res.ok) {
      setUser(null);

      router.push("/");
    }
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${API_URL}/api/user`);
    const data = await res.json();
    console.log(data + "data");
    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
