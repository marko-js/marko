import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  for (const child of input.children) {
    const _scope1_ = _nextScopeId();
    _write(`${_escapeXML(child.text)}${_markHydrateNode(_scope1_, "#text/0")}`);
    _maybeFlush();
  }
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);