import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  for (const child of input.children) {
    const _scope = _nextScopeId();
    _write(`${_escapeXML(child.text)}${_markHydrateNode(_scope, 0)}`);
    _maybeFlush();
  }
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);