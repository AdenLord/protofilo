import { Outlet,NavLink  } from "react-router-dom";

const Layout = () => {

    return ( 
        <div>
        <nav className="m-navbar">
            <ul className="m-nav">
                <li >
                    <NavLink  className={({isActive}) => (isActive ? "active" : '')} to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : '')} to="abuot me">About Me</NavLink>
                </li>

                <li>
                    <NavLink className={({isActive}) => (isActive ? "active" : '')} to="contact">Contact info</NavLink>
                </li>
            </ul>
            <div className="navbar-bottom"></div>
        </nav>
        
        <Outlet/>
        </div>
     );
}
 
export default Layout;