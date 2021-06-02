import React, { Dispatch, ReactNode, useState ,createContext} from "react";

import {iEpisode} from"./models/espisodeInterface"

type SetValue = (value: any) => void;
interface AppContextInterface {
    showModal: boolean;
    setShowModal:  SetValue;
    search: string | null;
    setSearch: SetValue;
    episodes: iEpisode[];
    setEpisodes: SetValue;
    episode: iEpisode | null;
    setEpisode: SetValue;
    // React.Dispatch<React.SetStateAction<iEpisode | null>>

  }


export const AppContext =createContext<AppContextInterface | null >(null);

 const AppProvider : React.FC = props => {

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [episode, setEpisode] = useState(null);

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
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider