import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import './App.css'

function App() {
  return (
    <div>
      <header><NavBar /></header>
      <main>
      
        <Outlet />
      </main>
    </div>
  );
}

export default App;
