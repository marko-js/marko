import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  var _return;

  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}`);

  if (show) _return = 1;else _return = 2;
  return _return;
};

export default _renderer;
export const render = _createRenderer(_renderer);