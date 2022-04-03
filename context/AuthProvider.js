import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null, jwt: '', auth: false});
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
      localStorage.setItem('token', data.jwt);
      // setUser((data) => ({
      //   user: data.user,
      //   jwt: data.jwt,
      //   auth: true
      // }));
      setUser({ user: data, jwt: data.jwt, auth: true });
      setSuccess('logged in successfully');
      console.log(user, 'logged in');
      router.push("/");
    } else {
      setError('error logging in');
      setError(null);
    }
};

  // Logout user
  const logout = async () => {
    localStorage.removeItem("token");
		setUser({ user: null, jwt: "", auth: false });

		router.push("/");
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    const token = localStorage.getItem('token');
    const res = await fetch(`${API_URL}/users/me`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      console.log('checking if user is logged in');
      setUser({ user: data, jwt: token, auth: true });
    } else {
      setUser({ user: {}, jwt: '', auth: false});
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, register, user, error }} >
      {children}
    </AuthContext.Provider>
  );
};

