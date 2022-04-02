import { dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  _dynamicTag(input.renderBody, null);
};

export default _renderer;
export const render = _createRenderer(_renderer);