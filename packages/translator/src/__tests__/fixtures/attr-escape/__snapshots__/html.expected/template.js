import { classAttr as _classAttr, attr as _attr, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<div${_classAttr(input.className)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.foo} b`)}></div>${_markHydrateNode(_scope, 0)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);