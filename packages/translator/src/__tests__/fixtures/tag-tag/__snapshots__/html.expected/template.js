import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const MyTag = input => _write(`Hello <!>${_escapeXML(input.name)}${_markResumeNode(_scope1_id, "#text/0")}`);
  MyTag({
    name: "World",
    renderBody() {
      const _scope2_id = _nextScopeId();
    }
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/tag-tag/template.marko");