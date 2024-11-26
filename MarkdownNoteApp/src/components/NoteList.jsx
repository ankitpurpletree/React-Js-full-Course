import React from "react";
import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

function NoteList() {
  const { notes } = useNotes();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
      {Object.keys(notes).length === 0 ? (
        <p className="text-gray-500">No notes available. Start creating one!</p>
      ) : (
        <ul className="space-y-4">
          {Object.entries(notes).map(([id, { content, tags }]) => (
            <li
              key={id}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md border border-gray-300 dark:border-gray-700"
            >
              <Link to={`/note/${id}`} className="text-blue-500 hover:underline">
                <h2 className="text-lg font-semibold">
                  Note {id}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {content.substring(0, 50)}...
              </p>
              {tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-200 text-blue-800 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NoteList;
