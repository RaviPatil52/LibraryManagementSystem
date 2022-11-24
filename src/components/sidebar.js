import {  Link, useNavigate } from "react-router-dom";
import '../styles/sidebar.css'

  
const Sidebar = (props) => {
    let navigate= useNavigate()
    let AdminLogin=()=>{
        navigate("/admin-login")
    }
    return ( 
        <div className="sidebar">
           <div className="sidebar-img">
           <img src="https://cdn.icon-icons.com/icons2/2076/PNG/96/admin_man_person_user_icon_127232.png" alt="" />
           <div className="admin-name">
           <h3>Admin {props.data}</h3>
           </div>
           </div>
           <Link to="/admin-portal/">Home</Link>
            <Link to="/admin-portal/books-list">Books List</Link>
            <Link to="/admin-portal/users-list">Users List</Link>
            <Link to="/admin-portal/add-books">Add Books</Link>
            <Link to="/admin-portal/add-users">Add Users</Link>
            <button onClick={AdminLogin}>Logout</button>
        </div>
     );
}
 
export default Sidebar;