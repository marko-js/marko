import { toString as _toString, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write(`<em>Testing</em> <!>${_toString(value)}${_markHydrateNode(_scope0_, "#text/0")}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);