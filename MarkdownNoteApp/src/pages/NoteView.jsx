import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNotes } from "../context/NotesContext";

function NoteView() {
  const { id } = useParams();
  const { notes, versionHistory } = useNotes();

  const note = notes[id] || { content: "", tags: [] };
  const versions = versionHistory[id] || [];

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Note: {id}</h1>
      {/* Display the main note content */}
      <div className='bg-gray-100 p-4 rounded-md border border-gray-300'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {note.content}
        </ReactMarkdown>
      </div>
      {/* Display tags */}
      <div className='mt-4'>
        <h3 className='font-bold'>Tags:</h3>
        <ul className='list-disc ml-4'>
          {note.tags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
      </div>
      {/* Display version history */}
      <div className='mt-6'>
        <h3 className='font-bold'>Version History:</h3>
        {versions.length > 0 ? (
          <ul className='list-disc ml-4'>
            {versions.map((version, idx) => (
              <li key={idx}>
                <strong>{new Date(version.timestamp).toLocaleString()}:</strong>
                <div className='bg-gray-200 p-2 rounded-md mt-1'>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {version.content}
                  </ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No version history available.</p>
        )}
      </div>
    </div>
  );
}

export default NoteView;
