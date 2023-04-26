import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _other from "./components/other.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _other({
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write("<span>");
      const message = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/components/other.marko");
      _write(`${_escapeXML(message)}${_markResumeNode(_scope1_id, "#text/0")}</span>`);
    }
  });
}, "packages/translator/src/__tests__/fixtures/context-tag-from-tag-name/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);