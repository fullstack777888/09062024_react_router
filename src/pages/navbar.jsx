
import './navbar.css'
import { Outlet, Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div>
                <header>
                    <h1>Simple Navigation</h1>
                </header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar