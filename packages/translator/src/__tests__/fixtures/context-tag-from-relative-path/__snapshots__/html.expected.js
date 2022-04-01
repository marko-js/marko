import Other from "./other.marko";
import { write as _write, getInContext as _getInContext, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  Other({
    renderBody() {
      _write("<span>");

      const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");

      _write(`${_markHydrateNode(0)}${_escapeXML(message)}</span>`);

      const _scope = _nextScopeId();
    }

  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);