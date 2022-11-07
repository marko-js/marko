import {
  write,
  markHydrateNode,
  nextScopeId,
  writeHydrateScope,
  writeHydrateCall,
} from "@marko/runtime-fluurt/src/html";

export default () => {
  write("<body>");
  counter();
  write("</body>");
};

const counter = () => {
  const count = 0;
  const scopeId = nextScopeId();

  write(
    `${markHydrateNode(scopeId, 0)}<button>${markHydrateNode(
      scopeId,
      1
    )}${count}</button>`
  );

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, [, , count]);
  writeHydrateCall(scopeId, "counter");
};
