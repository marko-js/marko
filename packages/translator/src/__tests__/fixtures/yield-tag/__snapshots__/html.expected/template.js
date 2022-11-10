import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  show
}) => {
  var _return;
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}`);
  if (show) {
    const _scope = _nextScopeId();
    _return = 1;
  } else {
    const _scope = _nextScopeId();
    _return = 2;
  }
  return _return;
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);