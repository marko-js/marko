import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
import _myButton from "./components/my-button.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _myButton._({
    onClick: function () {
      clickCount++;
    },
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write(`${_escapeXML(clickCount)}${_markResumeNode(_scope1_id, "#text/0")}`);
    }
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/template.marko");