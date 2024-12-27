import React from "react";

// Quill Editor
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function QuillEditor({label, className="sm:col-span-2 text-gray-900 dark:text-white", theme="snow", value, onChange}) {
  
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];
  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium"
      >
        {label}
      </label>
      <ReactQuill
        theme={theme}
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
