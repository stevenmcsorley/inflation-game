// src/pages/_app.tsx
import { AuthProvider } from '../utils/AuthProvider';
import '../app/layout'; // Import your layout

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return (
    <AuthProvider>
      {/* Wrap your entire Next.js application */}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
