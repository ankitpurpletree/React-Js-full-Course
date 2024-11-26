import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import TagFilter from "../components/TagFilter";
import NoteList from "../components/NoteList";

function Home() {
  const [filteredTag, setFilteredTag] = useState(null);

  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-grow p-4'>
        <TagFilter onFilter={setFilteredTag} />
        <Editor filteredTag={filteredTag} />
        <NoteList />
      </div>
    </div>
  );
}

export default Home;
