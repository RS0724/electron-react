import React from "react";
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

const Login = (): JSX.Element => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={"data:image/jpeg;base64,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"}
      >
        <Box width={"100vw"} height={"100vh"} position={"absolute"} backgroundColor={"#80808080"}></Box>
      <Flex
      margin={"auto"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        borderRadius={"1rem"}
        width={"20%"}
        justifyContent={"center"}
        height={"35%"}
        padding={"2rem"}
        boxShadow={"1rem 1rem 1rem 0"}
        background={"white"}
      >
        <Text fontSize="2rem" fontWeight="bold" mb={4}>
          Login
        </Text>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input type="email" placeholder="Seu email" padding={"0.6rem"} width={"20rem"} borderRadius={"0.5rem"}/>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Senha:</FormLabel>
          <Input type="password" placeholder="Sua senha" padding={"0.6rem"} width={"20rem"} borderRadius={"0.5rem"}/>
        </FormControl>

        <Button mt={4} colorScheme="teal" width="full" padding={"0.6rem 2rem"} borderRadius={"0.5rem"}>
          Entrar
        </Button>

        <Text mt={2}>
          <Link color="teal.500" href="#">
            Esqueceu a senha?
          </Link>
        </Text>

        <Text mt={2}>
          Ainda não tem uma conta?{" "}
          <Link color="teal.500" href="#">
            Criar novo usuário
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Login;
