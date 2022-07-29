import React from "react";

import { MyProvider } from "./context";
import User from "./components/user";

const App = () => {
  const users = [
    { id: 1, name: "Yemi" },
    { id: 2, name: "Fike" },
    { id: 3, name: "Ayo" },
  ];
  return (
    <>
      <MyProvider>
        <User />
      </MyProvider>
    </>
  );
};

export default App;
