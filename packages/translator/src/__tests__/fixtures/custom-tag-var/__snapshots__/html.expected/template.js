import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = input => {
  const _scope = _nextScopeId();

  const data = _child({
    renderBody() {
      const _scope = _nextScopeId();
    }

  });

  _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(data)}`);
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);