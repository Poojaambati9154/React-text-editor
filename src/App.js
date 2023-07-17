import React,{useState} from "react";
import "./App.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";


const modules={
  toolbar:[
    [{header: [1,2,3,4,5,6,false]}],
    [{font: []}],
    [{size : []}],
    ["bold","italic","underline","strike"],
    ['blockquote', 'code-block'],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'color': [] }, { 'background': [] }],
    [
      {list: "ordered"},
      {list: "bullet"},
      {indent: "-1"},
      {indent: "+1"},
    ],
    ["link","image","video"],
   
  ],
};

const App=()=>{
  const [value, setValue]= useState("");
  return (
    <div className="container">
      <h1 className="heading">React Text Editor</h1>
      <div className="row">
        <div className="editor">
          <ReactQuill theme="snow" value={value} 
          onChange={setValue} className="editor-input" modules={modules}/>
        </div>
        <div className="preview">
          {value}
        </div>
      </div>
    </div>
  );
}

export default App;
