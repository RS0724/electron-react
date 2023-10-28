import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ImageUpload from "../ImageUpload";
import { useState } from "react";
import Api from "../../Api";

const NewUser = () => {
  const [picture, setPicture] = useState<[] | string[]>([]);
  

  const sendDatos = async () => {
    try {
      await Api.post("/user", {
        picture,
      });
      alert("Usuário Cadastrado");
    } catch (error) {
      alert("Erro ao cadastrar usuário !");
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
      <h1 style={{ color: "black" }}>Cadastrar Novo Usuário</h1>

      <FormControl>
        <FormLabel fontWeight={800}>Nome:</FormLabel>
        <Input
          id="name"
          type="text"
          width={"48rem"}
          height={"1rem"}
          padding={"0.5rem"}
          borderRadius={"0.5rem"}
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
        ></Input>
      </FormControl>

      <ImageUpload images={picture} setImages={setPicture} maxImages={1} />

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
        marginBottom={"2rem"}
        onClick={sendDatos}
        >
          Enviar
        </Button>

    </Flex>
  );
};

export default NewUser;
