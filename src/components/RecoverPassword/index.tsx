import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

interface IProps {
  setBooleanInformEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setBooleanInformTokenEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setBooleanInformNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const RecoverPassword = ({
  setBooleanInformEmail,
  setBooleanInformTokenEmail,
  setBooleanInformNewPassword,
}: IProps): JSX.Element => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const navigate = useNavigate();

  const submit = () => {
    navigate("/")
    alert("Senha Alterada com Sucesso!")
    setBooleanInformEmail(true);
    setBooleanInformTokenEmail(false);
    setBooleanInformNewPassword(false);
  };

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PawjGfwwWVARqgH4m-gUrTt0ACLHOYLuFg&usqp=CAU"
      }
    >
      <Box
        width={"100vw"}
        height={"100vh"}
        position={"absolute"}
        backgroundColor={"#80808080"}
      ></Box>
      <Flex
        margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"2rem"}
        borderRadius={"1rem"}
        width={"20%"}
        justifyContent={"center"}
        height={"35%"}
        padding={"2rem"}
        boxShadow={"1rem 1rem 1rem 0"}
        background={"white"}
        zIndex={"2"}
      >
        <Text fontSize="2rem" fontWeight="bold" mb={4}>
          Nova Senha
        </Text>
        <FormControl>
          <FormLabel>Senha:</FormLabel>
          <Input
            type="Password"
            placeholder="Digite Sua Nova Senha"
            padding={"0.6rem"}
            width={"20rem"}
            borderRadius={"0.5rem"}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Confirme Senha:</FormLabel>
          <Input
            type="password"
            placeholder="Confirme Sua Nova Senha"
            padding={"0.6rem"}
            width={"20rem"}
            borderRadius={"0.5rem"}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </FormControl>

        <Flex gap={"2rem"}>
          <Button
            padding={"1rem 3rem"}
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
            onClick={submit}
          >
            Enviar
          </Button>

          <Button
            padding={"1rem 2rem"}
            borderRadius={"1.3em"}
            fontSize={"1.3rem"}
            fontWeight={"600"}
            backgroundColor={"#FF0000"}
            color={"white"}
            border={"none"}
            cursor={"pointer"}
            _hover={{
              color: "#FF0000",
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
    </Box>
  );
};

export default RecoverPassword;
