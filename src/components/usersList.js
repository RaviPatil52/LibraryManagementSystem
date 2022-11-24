import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/usersList.css'
const UsersList = () => {
    let [users,setUsers]=useState([])

    let location=useLocation()

    useEffect(()=>{
        let fetchUsers=async()=>{
            let response=await fetch("http://localhost:4000/users")
            let data =await response.json();
            setUsers(data);

        }
        fetchUsers()
    },[])

    let handleDelete=(id)=>{
        fetch(`http://localhost:4000/users/${id}`,{
                 method: "DELETE",
                 headers:{'content-type': 'application/json'},
                 body: JSON.stringify(users)
        })
          window.location.reload()
    }
    return ( 
        <div className="users-list">
           <div className="users-list-h1">
           <h1>Users List</h1>
           </div>
           <div className="users-list2">
           {
                users.map((data)=>(
                  <div className="users-list-map">
                    <h1>{data.name}</h1>
                    <p>{data.email}</p>
                    <p>{data.mobile}</p>
                     <button onClick={()=>handleDelete(data.id)}>Delete</button>
                  </div>
                ))
            }
           </div>
        </div>
     );
}
 
export default UsersList;