import { types as t } from "@marko/compiler";
import { parseBlock } from "@marko/compiler/babel-utils";

export default function (path) {
  const {
    node,
    hub: { file },
  } = path;
  const { rawValue, end } = node;
  const code = rawValue.replace(/^static\s*/, "");
  const start = node.start + (rawValue.length - code.length);
  let block = parseBlock(file, code, start, end);
  if (block.body.length === 1 && t.isBlockStatement(block.body[0])) {
    block = block.body[0];
  }

  const scriptlet = t.markoScriptlet(block.body, true);
  scriptlet.innerComments = block.innerComments;
  path.replaceWith(scriptlet);
}
