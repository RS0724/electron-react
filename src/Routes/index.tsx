import { HashRouter, Navigate, Route, Routes as Switch, useFetcher } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import { useEffect } from "react";

interface Iprops {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Routes = ({ logged, setLogged }: Iprops): JSX.Element => {
  useEffect(()=>{},[logged])
  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={logged ? <Navigate to={"/home"}/>: <Navigate to={"/login"}/>} />
        <Route path="/login" element={< Login setLogged={setLogged} />} />
        <Route path="/home" element={< Home setLogged={setLogged} />} />
      </Switch>
    </HashRouter>
  );
};
 
export default Routes;