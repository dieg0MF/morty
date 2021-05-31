import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');


  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        search,
        setSearch

      
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
