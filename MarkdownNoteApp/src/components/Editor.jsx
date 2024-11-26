import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNotes } from "../context/NotesContext";
import { exportToPDF } from "../utils/pdfExport";

export default function Editor() {
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const { saveNote } = useNotes();

  const handleSave = () => {
    const noteId = `note-${Date.now()}`;
    saveNote(
      noteId,
      text,
      tags.split(",").map((tag) => tag.trim())
    );
  };

  return (
    <div className='flex flex-col h-full'>
      <textarea
        className='w-full h-1/3 p-4 border border-gray-300 rounded-md mb-2'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Write your Markdown here...'
      />
      <input
        className='w-full p-2 border border-gray-300 rounded-md mb-2'
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder='Add tags (comma-separated)'
      />
      <div className='flex'>
        <button
          onClick={handleSave}
          className='bg-blue-500 text-white p-2 rounded-md'
        >
          Save Note
        </button>
        <button
          onClick={() => exportToPDF(text)}
          className='bg-green-500 text-white p-2 rounded-md ml-2'
        >
          Export to PDF
        </button>
      </div>
      <div className='h-1/2 p-4 bg-gray-100 border border-gray-300 rounded-md overflow-auto mt-4'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
