import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _customTag._({
    name: "hello",
    renderBody({
      count,
      name
    }) {
      const _scope1_id = _nextScopeId();
      _write(`<div>Count (<!>${_escapeXML(name)}${_markResumeNode(_scope1_id, "#text/0")}): <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/1")}</div>`);
    }
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-attributes/template.marko");