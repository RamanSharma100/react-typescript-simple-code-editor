import { FunctionComponent as FC } from "react";

import IPreviewPage from "./IPreviewPage";

import "./PreviewPage.css";

const PreviewPane: FC<IPreviewPage> = ({ htmlCode, cssCode, jsCode }) => {
  const code = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
    <script>
      ${jsCode}
    </script>
  </body>
  </html>
  `;

  return (
    <div className="PreviewPane col-md-8 ">
      {htmlCode || cssCode || jsCode ? (
        <iframe className="w-100 h-100" srcDoc={code} />
      ) : (
        <h1 className="text-center display-4 my-2">
          Please add html, css and js code to get the output
        </h1>
      )}
    </div>
  );
};

export default PreviewPane;
