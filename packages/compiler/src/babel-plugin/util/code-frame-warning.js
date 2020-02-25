import { relative } from "path";
import { codeFrameColumns } from "@babel/code-frame";
import { getLoc } from "./get-loc";
import complain from "complain";
const cwd = process.cwd();

export default (filename = "", code, msg, node) => {
  const start = getLoc(code, node.start);
  const end = node.end != null && getLoc(code, node.end);
  const frame = codeFrameColumns(code, { start, end }, { highlightCode: true });
  const position = `(${start.line},${start.column})`;
  const location = node && node.pos;
  const options = { location };

  if (location != null) {
    options.location = position;
  } else {
    options.location = filename;
  }

  return complain(
    `${relative(cwd, filename)}${position}: ${msg}\n${frame}`,
    options
  );
};
