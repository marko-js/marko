import { nextScopeId as _nextScopeId, register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const data = _child._({
    renderBody() {
      const _scope1_id = _nextScopeId();
    }
  }, _register(() => {}, "packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/template.marko_0_data", _scope0_id));
  _write(`<div>${_escapeXML(data)}${_markResumeNode(_scope0_id, "#text/1")}</div>`);
  _writeScope(_scope0_id, {}, _scope0_);
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-var-multiple/template.marko");