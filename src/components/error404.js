import '../styles/error404.css'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    let navigate= useNavigate()
    let handleHomepage = () => {
        navigate("/");
      };
    return ( 
        <div className="error404">
        <button id="btn" onClick={handleHomepage}>Go to Homepage</button>
        </div>
     );
}
 
export default Error404;