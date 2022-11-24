
import Sidebar from "./sidebar";
// import "../styles/AdminPortal.css";
import UsersList from "./usersList";
import AddBooks from "./addBooks";
import AddUsers from "./addUsers";
import BooksList from "./booksList";
import Error404 from "./error404";
import { Routes, Route } from "react-router-dom";
import SidebarUsers from "./sidebarUsers";
import AdminPortalHome from "./adminPortalHome";
       

const UserPortal = (props) => {
  return (
    <div className="admin-portal">
     
    <div className="adminHome">
        <SidebarUsers data={props.data}/>
    <Routes>
       <Route path="/" element={<AdminPortalHome />} />
     

     <Route path="/books-list" element={<BooksList />} />
     {/* <Route path="/users-list" element={<UsersList />} />
     <Route path="/add-books" element={<AddBooks />} />
     <Route path="/add-users" element={<AddUsers />} /> */}

     <Route path="*" element={<Error404 />} />
   </Routes>
    </div>
    </div>
  );
};

export default UserPortal;
