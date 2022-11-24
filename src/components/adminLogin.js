import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";
const AdminLogin = (props) => {
 
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let handleLogin = () => {
    if (email == props.data && password == 1234) {
      navigate("/admin-portal");
    } else {
      alert("Invalid Email or Password");
    }
  };

  let handleHomepage = () => {
    navigate("/");
  };


  return (
    <div className="adminLogin">
      <div className="userForm">
        <h1>Admin Login</h1>
        <div className="user-form">
          <form action="" onSubmit={handleLogin}>
            <div className="user-form1">
              <div className="label"><label htmlFor="">Email</label></div>
              <input
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="user-form2">
              <div className="label"><label htmlFor="">Password</label></div>
              <input
                type="text"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="user-form3">
              <button className="btn" >Login</button>
              <button className="btn" onClick={handleHomepage}>Homepage</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
