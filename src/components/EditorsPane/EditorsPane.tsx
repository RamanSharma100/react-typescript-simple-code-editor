import { FunctionComponent as FC } from "react";

import Editor from "./Editor/Editor";

import IEditorsPane from "./IEditorsPane";

import "./EditorsPane.css";

const EditorsPane: FC<IEditorsPane> = ({
  htmlCode,
  cssCode,
  jsCode,
  setHtmlCode,
  setCssCode,
  setJsCode,
}) => {
  return (
    <div className="EditorsPane col-md-4 position-relative bg-dark  px-0">
      <Editor lang="html" code={htmlCode} setCode={setHtmlCode} />
      <Editor lang="css" code={cssCode} setCode={setCssCode} />
      <Editor lang="javascript" code={jsCode} setCode={setJsCode} />
    </div>
  );
};

export default EditorsPane;
