// utils/useAuth.tsx

// Ensure this component is a Client Component
'use client'

// utils/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from './AuthProvider'; // Adjust the import path if necessary

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
