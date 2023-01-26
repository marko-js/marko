import Other from "./other.marko";
import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  Other({
    renderBody() {
      const _scope1_ = _nextScopeId();
      _write("<span>");
      const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");
      _write(`${_escapeXML(message)}${_markHydrateNode(_scope1_, "#text/0")}</span>`);
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);