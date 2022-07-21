import React, { useRef, forwardRef } from "react";

const App = () => {
  const textInput = useRef();

  const triggerHanlder = () => {
    console.log(textInput.current.value);
  };

  return (
    <>
      <h1>Form:</h1>
      <InputComponent ref={textInput} />
      <button onClick={triggerHanlder}>Trigger</button>
    </>
  );
};

const InputComponent = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
export default App;
