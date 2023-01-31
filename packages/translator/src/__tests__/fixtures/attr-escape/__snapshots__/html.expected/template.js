import { classAttr as _classAttr, attr as _attr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write(`<div${_classAttr(input.className)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.foo} b`)}></div>${_markHydrateNode(_scope0_id, "#div/0")}`);
}, "packages/translator/src/__tests__/fixtures/attr-escape/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);