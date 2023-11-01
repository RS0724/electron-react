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
  import { useState, useEffect } from "react";
  import Api from "../../Api";
  import { useNavigate } from "react-router-dom";

  interface IProps{
    setBooleanTokenEmail: React.Dispatch<React.SetStateAction<boolean>>
    setBooleanInformEmail: React.Dispatch<React.SetStateAction<boolean>>
  }
  
    const RecoverInformEmail = ({setBooleanTokenEmail,  setBooleanInformEmail}: IProps): JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate()

    const submit = () => {
      setBooleanTokenEmail(true)
      setBooleanInformEmail(false)
      alert("Caso e-mail exista foi enviado token de recuperação, verifique sua caixa de spam caso não encontre")
    }
  
    return (
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundImage={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkQM36Nc7mj3Io8awrzsa1dU_RSmtcZq_pw&usqp=CAU"
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
          background={"#00FFFF"}
          zIndex={"2"}
        >
          <Text fontSize="2rem" fontWeight="bold" mb={4}>
            Informe Seu Email
          </Text>
          <FormControl>
  
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              placeholder="Digite Sua Email Cadastrado"
              padding={"0.6rem"}
              width={"20rem"}
              borderRadius={"0.5rem"}
              onChange={(e) => {
                setEmail(e.target.value);
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
        onClick={()=>navigate("/")}
       >
        Cancelar
      </Button>
  
          </Flex>
  
          </Flex>
      </Box>
    );
  };
  
  export default RecoverInformEmail;