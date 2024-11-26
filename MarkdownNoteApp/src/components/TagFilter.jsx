import React from "react";
import { useNotes } from "../context/NotesContext";

export default function TagFilter({ onFilter }) {
  const { notes } = useNotes();
  const tags = Array.from(
    new Set(Object.values(notes).flatMap((note) => note.tags || []))
  );

  return (
    <div>
      <h3 className='font-bold mb-2'>Filter by Tag</h3>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilter(tag)}
          className='bg-gray-700 text-white p-2 rounded-md mb-2 block'
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
