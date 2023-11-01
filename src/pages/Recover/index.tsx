import { SetStateAction, useState } from "react";
import RecoverInformEmail from "../../components/RecoverInformEmail";
import RecoverInformTokenEmail from "../../components/RecoverInformTokenEmail";
import RecoverPassword from "../../components/RecoverPassword";

const Recover = () => {
  const [booleanInformEmail, setbooleanInformEmail] = useState<Boolean>(true);
  const [booleanInformTokenEmail, setbooleanInformTokenEmail] =
    useState<Boolean>(false);
  const [booleanInformNewPassword, setbooleanInformNewPassword] =
    useState<Boolean>(true);

  return (
    <>
      {booleanInformEmail && (
      <RecoverInformEmail 
      setBooleanInformEmail={setbooleanInformEmail} 
      setBooleanTokenEmail={setbooleanInformTokenEmail} 
      />
      )}
      {booleanInformTokenEmail && (
      <RecoverInformTokenEmail 
      setBooleanTokenEmail ={setbooleanInformTokenEmail}
      setBooleanInformNewPassword = {setbooleanInformNewPassword}
      />
      )}
      {booleanInformNewPassword && (
      <RecoverPassword  
      setBooleanInformNewPassword ={setbooleanInformNewPassword}
      setBooleanInformTokenEmail={setbooleanInformTokenEmail}
      setBooleanInformEmail={setbooleanInformEmail}
      />
      )}
    </>
  );
};

export default Recover;
