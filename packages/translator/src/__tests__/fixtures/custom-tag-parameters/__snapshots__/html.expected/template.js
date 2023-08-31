import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = (input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _customTag._({
    renderBody({
      value: [count]
    }) {
      const _scope1_id = _nextScopeId();
      _write(`<div>Count: <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    }
  });
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/custom-tag-parameters/template.marko");