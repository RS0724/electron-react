import { Flex, Input, TagLabel } from "@chakra-ui/react";
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
      <Flex 
      border={"1px solid black"} 
      width={"60rem"} 
      height={"40rem"}
      flexDirection={"column"}
      alignItems={"center"}
      >
        <label>Token bot:</label>
        <Input
          id="token-bot"
          width={"80%"}
          height={"1rem"}
          padding={"0.5rem"}
        />
        
        <label>Token bot:</label>
        <Input id="chat-id" width={"80%"} height={"1rem"} padding={"0.5rem"} />
      </Flex>
    </>
  );
};

export default Home;
