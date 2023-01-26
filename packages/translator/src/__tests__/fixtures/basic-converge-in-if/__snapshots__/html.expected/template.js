import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  const a = 0;
  const b = 0;
  if (true) {
    const _scope1_ = _nextScopeId();
    _write(`${_escapeXML(a + b)}${_markHydrateNode(_scope1_, "#text/0")}`);
  }
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);