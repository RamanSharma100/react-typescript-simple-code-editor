export default interface IEditorsPane {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  setHtmlCode: (htmlCode: string) => void;
  setCssCode: (cssCode: string) => void;
  setJsCode: (jsCode: string) => void;
}
