import "./login.css";
import img1 from "./profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <div className="col-lg-12" id="loginPage">
            <form>
              <div id="SignUpText">
                <h5 className="text-center">SIGN IN</h5>
              </div>
              <div className="d-flex justify-content-center mt-3 mb-5">
                <img src={img1} style={{ width: "80px" }} alt="Icon" />
              </div>
              <div className="input-container mt-5 mb-2">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-container mt-4 mb-2">
                <FontAwesomeIcon icon={faLock} className="icon" />

                <input type="text" placeholder="Password" />
              </div>

              <div id="anchorFeild">
                <a>Remember me</a>
                <a>Forgot Your Password ?</a>
              </div>

              <div className="d-flex justify-content-center mt-2">
                <button id="ButtonFeild">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
