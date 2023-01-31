import { attr as _attr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div a=0${_attr("b", value)}></div>${_markHydrateNode(_scope0_id, "#div/0")}`);
}, "packages/translator/src/__tests__/fixtures/update-attr/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);