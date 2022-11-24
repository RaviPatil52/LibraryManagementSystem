import {  Link, useNavigate } from "react-router-dom";
import '../styles/sidebar.css'


const SidebarUsers = (props) => {
    let navigate= useNavigate()
    let UserLogin=()=>{
        navigate("/user-login")
    }
    return ( 
        <div className="sidebar">
           <div className="sidebar-img">
           <img src="https://cdn.icon-icons.com/icons2/884/PNG/96/person_5_icon-icons.com_68898.png" alt="" />
           <div className="admin-name">
           <h3>User <br /> {props.data}</h3>
           </div>
           </div>
           <Link to="/user-portal/">Home</Link>
            <Link to="/user-portal/books-list">Books List</Link>
            {/* <Link to="/admin-portal/users-list">Users List</Link> */}
        
            <button onClick={UserLogin}>Logout</button>
        </div>
     );
}
 
export default SidebarUsers;