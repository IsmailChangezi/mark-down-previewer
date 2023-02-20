export default function TextArea({ text, handleChange }) {
  return (
    <div>
      <textarea id="editor" value={text} onChange={handleChange} />
    </div>
  );
}
