import { relative } from "path";
import { codeFrameColumns } from "@babel/code-frame";
import { getLoc } from "./get-loc";
const cwd = process.cwd();

export default (filename = "", code, msg, startPos, endPos) => {
  const start = getLoc(code, startPos);
  const end = endPos != null && getLoc(code, endPos);
  const frame = codeFrameColumns(code, { start, end }, { highlightCode: true });
  const position = `(${start.line},${start.column})`;
  return new SyntaxError(
    `${relative(cwd, filename)}${position}: ${msg}\n${frame}`
  );
};
