import { useState } from "react";

import EditorsPane from "./components/EditorsPane/EditorsPane";
import PreviewPane from "./components/PerviewPane/PreviewPane";

import "./App.css";

const App = () => {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [cssCode, setCssCode] = useState<string>("");
  const [jsCode, setJsCode] = useState<string>("");

  return (
    <div className="container-fluid">
      <div className="row">
        <EditorsPane
          htmlCode={htmlCode}
          cssCode={cssCode}
          jsCode={jsCode}
          setHtmlCode={setHtmlCode}
          setCssCode={setCssCode}
          setJsCode={setJsCode}
        />
        <PreviewPane htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
      </div>
    </div>
  );
};

export default App;
