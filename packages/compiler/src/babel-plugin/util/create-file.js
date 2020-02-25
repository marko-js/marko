import { getLoc } from "./get-loc";

export default (filename, code) => {
  const opts = { filename };
  const start = { line: 0, column: 0 };
  const end = getLoc(code, code.length);
  const loc = { start, end, loc: { start, end } };
  return {
    type: "File",
    code,
    opts,
    ...loc,
    program: {
      type: "Program",
      sourceType: "module",
      ...loc,
      body: [],
      directives: []
    }
  };
};
