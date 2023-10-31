import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ImageUpload from "../ImageUpload";
import { useState } from "react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [picture, setPicture] = useState<[] | string[]>([]);
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const navigate = useNavigate();

  const sendDatos = async () => {
    try {
      if (password !== confirmPassword) throw Error("As senhas não são iguais");
      else {
        await Api.post("/user", {
          picture: picture[0],
          name,
          password,
          email,
        });
        alert("Usuário Cadastrado com sucesso !");
        navigate("/");
      }
    } catch (error) {
      alert("Erro ao cadastrar usuário!" + error.message);
    }
  };

  return (
    <Flex
      border={"1px solid black"}
      width={"60rem"}
      minHeight={"40rem"}
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
      <h1 style={{ color: "blue" }}>Cadastrar Novo Usuário</h1>

      <FormControl>
        <FormLabel fontWeight={800}>Nome:</FormLabel>
        <Input
          id="name"
          type="text"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={800}>E-mail:</FormLabel>
        <Input
          id="email"
          type="email"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={800}>Senha:</FormLabel>
        <Input
          id="password"
          type="password"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight={800}>Confimar Senha:</FormLabel>
        <Input
          id="confirmPassword"
          type="confirmPassword"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
          onChange={(e)=> setConfirmPassword(e.target.value)}
        ></Input>
      </FormControl>

      <ImageUpload images={picture} setImages={setPicture} maxImages={1} />

      <Flex gap={"2rem"}> 
        
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
          color: "#00a2ff",
          border: "1px solid",
          background: "white",
        }}
        marginBottom={"2rem"}
        onClick={sendDatos}
      >
        Enviar
      </Button>

      <Button
        padding={"1.5rem 2.3rem"}
        borderRadius={"1.3rem"}
        fontSize={"1.3rem"}
        fontWeight={"600"}
        backgroundColor={"#ff0038"}
        color={"white"}
        border={"none"}
        cursor={"pointer"}
        _hover={{
          color: "#ff0038",
          border: "1px solid",
          background: "white",
        }}
        marginBottom={"2rem"}
        onClick={() => navigate("/")}
      >
        Cancelar
      </Button>

      </Flex>

    </Flex>
  );
};

export default NewUser;
