import Other from "./other.marko";
import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  Other({
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write("<span>");
      const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/other.marko");
      _write(`${_escapeXML(message)}${_markHydrateNode(_scope1_id, "#text/0")}</span>`);
    }
  });
}, "packages/translator/src/__tests__/fixtures/context-tag-from-relative-path/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);