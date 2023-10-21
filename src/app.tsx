import { useState } from "react";
import Routes from "./Routes";

const App = (): JSX.Element => {
const [logged, setLogged] = useState<boolean>(false)

  return (
    <>
      <Routes logged={logged} setLogged={setLogged}/>
    </>
  );
};

export default App;