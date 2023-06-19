import React, { useEffect, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log("username is : " + usernameRef.current?.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <input ref={usernameRef} type="text" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRef;
