import { FunctionComponent as FC, useState } from "react";

import IEditor from "./IEditor";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "./Editor.css";

const Editor: FC<IEditor> = ({ lang, code, setCode }) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  return (
    <div className="position-relative display-flex flex-row">
      <button
        onClick={() => setIsOpened((prevState) => !prevState)}
        className="btn btn-secondary position-relative  text-title w-100 rounded-0"
      >
        {lang}
      </button>
      {isOpened && (
        <CodeMirror
          onChange={(editor, data, value) => setCode(value)}
          options={{
            mode: lang === "html" ? "xml" : lang,
            theme: "material",
            lineNumbers: true,
            inputStyle: "textarea",
            lineWrapping: true,
            lint: true,
          }}
          value={code}
        />
      )}
    </div>
  );
};

export default Editor;
