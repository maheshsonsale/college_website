import { Link } from "react-router-dom";
import '../css/navbar.css'; // You'll define styles for the navbar here
function Navbar() {
    return (<>
        <nav className="navbar">
            <div className="navbar-brand">Swami Vivekananda</div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/events" className="navbar-link">Events</Link>
                <Link to="/notices" className="navbar-link">Notices</Link>
                <Link to="/courses" className="navbar-link">Courses</Link>
                <Link to="/faculty" className="navbar-link">Faculty</Link>
                <Link to="/login" className="navbar-link">Login</Link>
                <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </div>
        </nav>
    </>)
}
export default Navbar;