import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import userLogo from '../Images/userLogo3_low.png';
import { signout } from '../Actions/UserActions';

function Navigation(props) {
  const dispatch = useDispatch()
  const userSignin = useSelector((store) => store.userSignin)
  console.log('userSignin'+JSON.stringify(userSignin));
  const logout = () => {
  dispatch(signout());
  document.location.href = "/";
  };

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container-fluid">
             <span className="navbar-brand carLogo">
              <img className="logo" src={logo} alt="logo" width="200" height="90"/>
              <span className='stylethe'></span>
             </span>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span
            >
            </button>
            
        {userSignin.response && userSignin.response.data.role === "ADMIN" && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/admin-car-list">
                        Car Availability
                  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/add-car">
                        Add Car
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/remove-car">
                        Remove Car 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/admin-edit-profile">
                        Edit Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/payment-history">
                        Payment History
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/feedback-list">
                        Feedback/Rating History 
                    </Link>
                </li>
                </ul>
                <div className="nav-role text-light">
               {userSignin.response.data.role}
              </div>
                <div className="d-flex">
                    <button
                        onClick={logout}
                        class="btn btn-warning"
                        type="button"
                    >
                        Logout
                   </button>
                </div>
            </div> 
        )}
        {userSignin.response && userSignin.response.data.role === "EMPLOYEE" && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/emp-car-list">
                       Car Availability
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/booking-list">
                       Booking List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/remove-car">
                        Remove Car
                    </Link>
                 </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/emp-edit-profile">
                        Edit Profile
                    </Link>
                </li>
            </ul>
            <div className="nav-role text-light">
               {userSignin.response.data.role}
              </div>

                <div className="d-flex">
                    <button
                        onClick={logout}
                        className="btn btn-warning"
                        type="button"
                        >
                        Logout
                   </button>
                </div>
             </div> 
        )}
          {userSignin.response && userSignin.response.data.role === "USER" && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/user-car-list">
                       Car Availability
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/book-car">
                       Book Car
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/manage-booking">
                       Manage Booking
                    </Link>
                 </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/user-edit-profile">
                        Edit Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light " to="/feedback">
                       Feedback
                    </Link>
                </li>
            </ul>
              <div className="nav-role text-light">
              <img className="logo" src={userLogo} alt="logo" width="30" /> {userSignin.response.data.name}
              </div>
                <div className="d-flex">
                    <button
                        onClick={logout}
                        className="btn btn-warning"
                        type="button"
                        >
                        Logout
                   </button>
                </div>
             </div> 
        )}    
        {!userSignin.response && (
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light " to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <Link
                  to="/signin"
                  className="btn btn-warning"
                  type="button">
                  Login
                 </Link>
               </div>
            </div>
           )} 
        </div>
       </nav>
     </div>
  )
}

export default Navigation
