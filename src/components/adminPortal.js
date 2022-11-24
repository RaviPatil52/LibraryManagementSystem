import AdminPortalHome from "./adminPortalHome";
import Sidebar from "./sidebar";
import "../styles/adminPortal.css";
import UsersList from "./usersList";
import AddBooks from "./addBooks";
import AddUsers from "./addUsers";
import BooksList from "./booksList";
import Error404 from "./error404";
import { Routes, Route } from "react-router-dom";

const AdminPortal = (props) => {
  return (
    <div className="admin-portal">
      <div className="sidebar">
        <Sidebar data={props.data} />
      </div>
    <div className="adminHome">
    <Routes>
       
       <Route path="/" element={<AdminPortalHome />} /> 
     <Route path="/books-list" element={<BooksList />} />
     <Route path="/users-list" element={<UsersList />} />
     <Route path="/add-books" element={<AddBooks />} />
     <Route path="/add-users" element={<AddUsers />} />

     <Route path="*" element={<Error404 />} />
   </Routes>
    </div>
    </div>
  );
};

export default AdminPortal;
