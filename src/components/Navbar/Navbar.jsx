import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.webp"

const navItems = [
  { link: '/', name: 'Home' },
  // { link: '/categories', name: 'Collections' },
  { link: '/products', name: 'Books' },
  // { link: '/sell-books', name: 'Sell Books' },
  { link: '/blogs', name: 'Blogs' },
  { link: '/dashboard', name: 'Dashboard' },
];

const Navbar = () => {
  return (
    <div className='bg-primary text-white sticky top-0 z-50 shadow-md'>
      <div className='navbar max-w-7xl mx-auto px-4'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52 z-[999]'
            >
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <Link to='/' className='flex items-center gap-2'>
            <img src={logo} alt='Logo' className='h-8' />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            {
              navItems.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))
            }
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-primary">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className='navbar-end flex items-center gap-2'>
          <Link to='/login' className='btn btn-secondary rounded-full normal-case'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;