import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/AuthProvider';

import WeeklyOutgoings from  '../../components/WeeklyOutgoings';

function Dashboard() {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since the session cookie is HttpOnly, you cannot access it via client-side JavaScript
    // Instead, rely on the user object to determine if the user is logged in
    setLoading(false); // Set loading to false once user state is available
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
          <WeeklyOutgoings />
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Dashboard;
