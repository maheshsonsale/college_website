import { NavLink } from "react-router-dom";
import '../css/navbar.css'; // You'll define styles for the navbar here
function Navbar() {
    return (<>
        <nav className="navbar">
            <div className="navbar-brand">Swami Vivekananda</div>
            <div className="navbar-links">
                <NavLink to="/" className="navbar-link">Home</NavLink>
                <NavLink to="/events" className="navbar-link">Events</NavLink>
                <NavLink to="/notices" className="navbar-link">Notices</NavLink>
                <NavLink to="/courses" className="navbar-link">Courses</NavLink>
                <NavLink to="/faculty" className="navbar-link">Faculty</NavLink>
                <NavLink to="/login" className="navbar-link">Login</NavLink>
                <NavLink to="/dashboard" className="navbar-link">Dashboard</NavLink>
            </div>
        </nav>
    </>)
}
export default Navbar;