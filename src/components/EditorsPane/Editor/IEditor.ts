export default interface IEditor {
  lang: string;
  code: string;
  setCode: (htmlCode: string) => void;
}
