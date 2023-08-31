import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _layout from "./components/layout.marko";
const _renderer = ({
  name
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _layout._({
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write(`<h1>Hello <!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}</h1>`);
    }
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-layout/template.marko");