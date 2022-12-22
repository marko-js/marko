import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  show
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}`);
  if (show) {
    const _scope = _nextScopeId();
    const _return = 1;
  } else {
    const _scope = _nextScopeId();
    const _return2 = 2;
  }
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);