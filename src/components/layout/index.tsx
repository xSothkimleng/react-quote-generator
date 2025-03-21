import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '40%', margin: '5vh auto 0 auto' }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
