import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
  background,
  border,
} from "@chakra-ui/react";
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
      <button onClick={Logout}>Logout</button>
      <Flex
        border={"1px solid black"}
        width={"60rem"}
        height={"40rem"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        borderRadius={"1.5rem"}
        margin={"auto"}
        backgroundColor={"white"}
        color={"black"}
        boxShadow={"1rem 1rem 1.5rem 0"}
        >
        <h1 id="title-h1">Programar Mensagem telegram</h1>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
          <label>Token bot:</label>
          <Input
            id="token-bot"
            width={"48rem"}
            height={"1rem"}
            padding={"0.5rem"}
            borderRadius={"0.5rem"}
          />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
        <label>Chat-id:</label>
        <Input 
        id="chat-id" 
        width={"48rem"} 
        height={"1rem"} 
        padding={"0.5rem"}
        borderRadius={"0.5rem"} 
        />
        </FormControl>

        <FormControl color={"black"} display={"flex"} flexDirection={"column"}>
        <label>Mensagem:</label>
        <Textarea
          id="mensagem"
          width={"48rem"}
          height={"3rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
        ></Textarea>
        </FormControl>

        <Box
          borderStyle={"dotted"}
          width={"80%"}
          height={"3rem"}
          padding={"0.5rem"}
          borderRadius={"1rem"}
          fontSize={"2rem"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <text>Clique ou arraste para adicionar arquivos</text>
        </Box>

        <Box 
        color={"black"}
        display={"flex"} 
        justifyContent={"flex-start"} 
        width={"80%"}>

          <span>Imagens selecionadas:</span>
        </Box>

        <Button 
        padding={"1.5rem 2.3rem"} 
        borderRadius={"1.3em"}
        fontSize={"1.3rem"}
        fontWeight={"600"}
        backgroundColor={"#00a2ff"}
        color={"white"}
        border={"none"}
        cursor={"pointer"}
        _hover={{
          color:"#00a2ff", 
          border: "1px solid", 
          background: "white"
        }}
        >
          Programar mensagem
        </Button>
      </Flex>
    </>
  );
};

export default Home;
