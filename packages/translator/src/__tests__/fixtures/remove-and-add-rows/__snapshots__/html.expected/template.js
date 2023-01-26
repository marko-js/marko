import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  children
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write("<div>");
  for (const child of children) {
    const _scope1_ = _nextScopeId();
    _write(`${_escapeXML(child.text)}${_markHydrateNode(_scope1_, "#text/0")}`);
    _maybeFlush();
  }
  _write(`</div>${_markHydrateNode(_scope0_, "#div/0")}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);