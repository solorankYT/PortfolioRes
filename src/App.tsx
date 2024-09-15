import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import './App.css';
import Spinner from './Spinner'; // Import the Spinner component

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Spinner /> // Show the spinner while loading
      ) : (
        <>
          <header><NavBar /></header>
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
