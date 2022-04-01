import { markHydrateNode as _markHydrateNode, attr as _attr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  _write(`${_markHydrateNode(0)}<div${_attr("foo", `Hello ${name}`)}></div>`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);