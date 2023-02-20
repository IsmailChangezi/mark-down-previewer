import React from "react";
import { marked } from "marked";
export default function MarkDown({ text }) {
  const markdown = marked(text);
  return (
    <div id="preview">
      <p dangerouslySetInnerHTML={{ __html: markdown }}></p>
    </div>
  );
}
