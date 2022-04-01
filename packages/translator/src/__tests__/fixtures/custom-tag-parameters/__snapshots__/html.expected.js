import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";

const _renderer = input => {
  _customTag({
    renderBody(a, b, {
      c
    }) {
      _write(`<div>${_markHydrateNode(0)}${_escapeXML(a)} ${_markHydrateNode(1)}${_escapeXML(b)} ${_markHydrateNode(2)}${_escapeXML(c)}</div>`);

      const _scope = _nextScopeId();
    }

  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);