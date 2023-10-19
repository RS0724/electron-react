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
      backgroundImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1PawjGfwwWVARqgH4m-gUrTt0ACLHOYLuFg&usqp=CAU"}
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
