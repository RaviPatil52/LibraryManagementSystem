import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  return (
    <section className="home">
      
      <div className="home-links">
      <h1>Welcome to eLibrary</h1>
       <Link to="/admin-login">
       <div className="home-links-admin">
          <img src="https://cdn.icon-icons.com/icons2/2076/PNG/96/admin_man_person_user_icon_127232.png" alt="" />
          <Link to="/admin-login">Admin Login</Link>
        </div>
       </Link>
        <Link to="/user-login">
        <div className="home-links-user">
          <img src="https://cdn.icon-icons.com/icons2/884/PNG/96/person_5_icon-icons.com_68898.png" alt="" />
          <Link to="/user-login">User Login</Link>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
