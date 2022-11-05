import { markHydrateNode as _markHydrateNode, classAttr as _classAttr, attr as _attr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}<div${_classAttr(input.className)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.foo} b`)}></div>`);
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);