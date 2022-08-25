import { markHydrateNode as _markHydrateNode, attr as _attr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = ({
  name
}) => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}<div${_attr("foo", `Hello ${name}`)}></div>`);
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);