import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, maybeFlush as _maybeFlush, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  children
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  for (const child of children) {
    const _scope1_id = _nextScopeId();
    _write(`${_escapeXML(child.text)}${_markHydrateNode(_scope1_id, "#text/0")}`);
    _maybeFlush();
  }
  _write(`</div>${_markHydrateNode(_scope0_id, "#div/0")}`);
}, "packages/translator/src/__tests__/fixtures/remove-and-add-rows/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);