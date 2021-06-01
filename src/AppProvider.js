import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState({});


  return (
    <AppContext.Provider
      value={{
        showModal,
        setShowModal,
        search,
        setSearch,
        episodes,
        setEpisodes,
        episode,
        setEpisode


      
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
