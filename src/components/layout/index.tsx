import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './style.css';

const Layout = () => {
  return (
    <div className='main-layout'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
