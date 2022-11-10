import { write as _write, getInContext as _getInContext, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _other from "./components/other.marko";
const _renderer = input => {
  const _scope = _nextScopeId();
  _other({
    renderBody() {
      const _scope = _nextScopeId();
      _write("<span>");
      const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko");
      _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(message)}</span>`);
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);