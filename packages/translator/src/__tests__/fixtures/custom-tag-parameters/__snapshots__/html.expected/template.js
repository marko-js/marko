import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _customTag({
    renderBody({
      value: [count]
    }) {
      const _scope1_id = _nextScopeId();
      _write(`<div>Count: <!>${_escapeXML(count)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
    }
  });
}, "packages/translator/src/__tests__/fixtures/custom-tag-parameters/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);