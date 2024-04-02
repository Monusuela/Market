import { createContext, useState } from 'react';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
    const [Mode, setMode] = useState("ligth")

    const handleMode = () => {
        setMode(() => Mode === "ligth" ? "dark" : "ligth")
    }

  const modeValues = {Mode, setMode, handleMode};
  return (
    <ModeContext.Provider value={modeValues}>{children}</ModeContext.Provider>
  );
};

export { ModeContext, ModeProvider };
