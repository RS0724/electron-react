import { useNavigate } from "react-router-dom";

interface Iprops {
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ setLogged }: Iprops) => {
    const navigate = useNavigate();
  
    const Logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default Home;
