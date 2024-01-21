// pages/home.tsx
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our application.</p>
      <Link href="/login">
        <a>Log in</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
    </div>
  );
};

export default HomePage;