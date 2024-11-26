import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, setNotes] = useLocalStorage("notes", {});
  const [versionHistory, setVersionHistory] = useLocalStorage(
    "versionHistory",
    {}
  );

  const saveNote = (id, content, tags) => {
    setNotes({ ...notes, [id]: { content, tags } });
    saveVersion(id, content);
  };

  const saveVersion = (id, content) => {
    const versions = versionHistory[id] || [];
    setVersionHistory({
      ...versionHistory,
      [id]: [...versions, { content, timestamp: Date.now() }],
    });
  };

  return (
    <NotesContext.Provider value={{ notes, saveNote, versionHistory }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
