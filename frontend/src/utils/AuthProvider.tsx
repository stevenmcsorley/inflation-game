// src/utils/AuthProvider.tsx

'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface User {
  id: string;
  username: string;
  // Add other user-related properties here
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (formData: { username: string; password: string }) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Check for and set the user from the server on component mount
// Inside the AuthProvider component
useEffect(() => {
    const checkAuthentication = async () => {
      const checkAuthEndpoint = 'http://localhost:3000/check-session';
      const getUsernameEndpoint = 'http://localhost:3000/get-username'; // Endpoint to get the username
  
      try {
        const sessionResponse = await axios.get(checkAuthEndpoint, { withCredentials: true });
        if (sessionResponse.data.success) {
          // Session check was successful, now get the username
          const usernameResponse = await axios.get(getUsernameEndpoint, { withCredentials: true });
          if (usernameResponse.status === 200) {
            // Set the user state with the returned username
            setUser({ id: sessionResponse.data.userId, username: usernameResponse.data });
          }
        } else {
          setUser(null); // Not logged in
        }
      } catch (error) {
        console.error(error);
        setUser(null); // Error handling
      }
    };
  
    checkAuthentication();
  }, []);
  

  const login = async (formData: { username: string; password: string }) => {
    try {
      const loginEndpoint = 'http://localhost:3000/login';

      const response = await axios.post(loginEndpoint, formData, {
        withCredentials: true,
      });

      if (response.data.success) {
        setUser(response.data.user);
        Cookies.set('sessionId', response.data.sessionId, { expires: 1 }); // Adjust cookie options as needed
        return true;
      } else {
        console.error('Login failed');
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    const logoutEndpoint = 'http://localhost:3000/logout';

    axios.post(logoutEndpoint, {}, {
      withCredentials: true
    }).then(() => {
      setUser(null);
      Cookies.remove('sessionId'); // Adjust the cookie name
    }).catch((error) => {
      console.error('Logout failed', error);
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
