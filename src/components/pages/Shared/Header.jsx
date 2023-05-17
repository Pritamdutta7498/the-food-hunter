import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log(user);

      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <>
      <div className='md:px-32 mt-4'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              {/* toggle button in small screen */}
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink
                    to="/chefs"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold decoration-stone-950" : ""
                    }
                  >
                    Chefs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold decoration-stone-950" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl  md:text-4xl text-amber-600">
              The Food Hunter
            </Link>
          </div>
          {/* center buttons in large screen */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chefs"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Chefs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ?
              /* profile picture Place */
              <div className="dropdown dropdown-end">
                
                <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || ''} className='m-0 p-0'>
                  
                  <label tabIndex={0} className="btn border-slate-900 btn-ghost btn-circle avatar">
                    <div className="w-0 rounded-full">
                      <img src={user?.photoURL || 'https://i.ibb.co/sQcF35J/baby.jpg'} />
                    </div>
                  </label>
                </div>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/user-profile'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>
                </ul>
              </div>
              /* profile picture end */
              :
              <>
                <Link to='/access/login' className="btn btn-ghost px-5 py-0">
                  login
                </Link>
              </>
            }
          </div>
        </div>
      </div >
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default Header;