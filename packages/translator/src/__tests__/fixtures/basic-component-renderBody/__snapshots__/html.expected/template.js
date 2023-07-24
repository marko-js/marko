import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _myButton from "./components/my-button.marko";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _myButton({
    onClick: function () {
      clickCount++;
    },
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write(`${_escapeXML(clickCount)}${_markResumeNode(_scope1_id, "#text/0")}`);
    }
  });
}, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);