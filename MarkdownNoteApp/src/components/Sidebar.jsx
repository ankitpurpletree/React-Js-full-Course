import React from "react";
import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

export default function Sidebar() {
  const { notes } = useNotes();

  return (
    <div className='w-64 bg-gray-800 text-white p-4'>
      <h1 className='text-lg font-bold mb-4'>Markdown Notes</h1>
      <Link
        to='/'
        className='block bg-blue-500 p-2 rounded-md mb-4 text-center'
      >
        + New Note
      </Link>
      <ul>
        {Object.keys(notes).map((id) => (
          <li key={id} className='p-2 hover:bg-gray-700 rounded-md'>
            <Link to={`/note/${id}`} className='block'>
              {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
