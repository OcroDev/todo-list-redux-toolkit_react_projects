//redux
import { useSelector, useDispatch } from "react-redux";

//router
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { unsetUser } from "./app/reducers/user/userSlice";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { Footer } from "./components/pure/Footer";

export const App = () => {
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let loginLogout = token ? (
    <Link
      onClick={() => dispatch(unsetUser())}
      to={"login"}
      style={{ textDecoration: "none" }}
    >
      {" | "}
      Log Out
    </Link>
  ) : (
    <Link to={"login"} style={{ textDecoration: "none" }}>
      {" | "}
      Login
    </Link>
  );
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                Home{" | "}
              </Link>
            </li>
            <li className="nav-item">{loginLogout}</li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" replace={true} />}
          ></Route>
          <Route
            path="/login"
            element={
              !token ? <LoginPage /> : <Navigate to="/" replace={true} />
            }
          ></Route>
        </Routes>
      </div>
      <Footer />
      
    </>
  );
};
