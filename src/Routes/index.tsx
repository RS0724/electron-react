import {
  HashRouter,
  Navigate,
  Route,
  Routes as Switch,
  useFetcher,
} from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import { useEffect } from "react";
import NewUser from "../components/NewUser";
import RecoverPassword from "../components/RecoverPassword";
import RecoverInformEmail from "../components/RecoverInformEmail";
import RecoverInformTokenEmail from "../components/RecoverInformTokenEmail";
import Recover from "../pages/Recover";

interface Iprops {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Routes = ({ logged, setLogged }: Iprops): JSX.Element => {
  useEffect(() => {}, [logged]);
  return (
    <HashRouter>
      <Switch>
        <Route
          path="/"
          element={
            logged ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />
          }
        />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/home" element={<Home setLogged={setLogged} />} />
        <Route path="/register" element={<NewUser />} />
        <Route path="/recover" element={<Recover/>} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
