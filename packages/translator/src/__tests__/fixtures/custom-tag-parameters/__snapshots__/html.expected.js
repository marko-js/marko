import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = input => {
  const _scope = _nextScopeId();

  _customTag({
    renderBody(a, b, {
      c
    }) {
      const _scope = _nextScopeId();

      _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(a)} ${_markHydrateNode(_scope, 1)}${_escapeXML(b)} ${_markHydrateNode(_scope, 2)}${_escapeXML(c)}</div>`);
    }

  });
};

export default _renderer;
export const render = _createRenderer(_renderer);