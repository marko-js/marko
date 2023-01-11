import { markHydrateNode as _markHydrateNode, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<em>Testing</em> ${_markHydrateNode(_scope, 0)}${_toString(value)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);