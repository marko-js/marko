import { nextScopeId as _nextScopeId, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = input => {
  const data = _child({
    renderBody() {
      const _scope = _nextScopeId();
    }

  });

  _write(`${_markHydrateNode(0)}${_escapeXML(data)}`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);