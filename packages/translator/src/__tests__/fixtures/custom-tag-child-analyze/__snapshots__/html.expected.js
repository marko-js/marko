import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  _write("Hello Frank");

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);