import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';

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
