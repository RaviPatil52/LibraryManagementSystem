import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home';
import UserLogin from './components/userLogin';
import AdminLogin from './components/adminLogin';
import AdminPortal from './components/adminPortal';
import Error404 from './components/error404';
import UserPortal from './components/userPortal';
function App() {
  let email="admin@gmail.com";  
  let email2="user@gmail.com";
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin-login" element={<AdminLogin data={email}/>}/>
      <Route path="/user-login" element={<UserLogin data={email2}/>}/>
      <Route path="/admin-portal/*" element={<AdminPortal data={email}/>}/>
      <Route path="/user-portal/*" element={<UserPortal data={email2}/>}/>
      <Route path="*" element={<Error404/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
