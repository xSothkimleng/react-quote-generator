import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        marginBottom: '0.5rem',
      }}>
      <NavLink
        to='/'
        style={({ isActive }) => ({
          padding: '0.5rem 0rem',
          fontSize: '16px',
          borderBottom: isActive ? '2px solid #BA0021' : '2px solid transparent',
          transition: isActive ? 'border-bottom 0.5s' : 'none',
        })}>
        Generate Quote
      </NavLink>
      <NavLink
        to='/favorites'
        style={({ isActive }) => ({
          padding: '0.5rem 0rem',
          fontSize: '16px',
          borderBottom: isActive ? '2px solid #BA0021' : '2px solid transparent',
          transition: isActive ? 'border-bottom 0.5s' : 'none',
        })}>
        Your Favorite
      </NavLink>
    </nav>
  );
};

export default Navbar;
