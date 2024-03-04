import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, serializedScope as _serializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, register as _register, peekSerializedScope as _peekSerializedScope, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _myButton from "./components/my-button.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const _childScope = _peekSerializedScope();
  _myButton._({
    onClick: _register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko_0/onClick", _scope0_id),
    renderBody() {
      const _scope1_id = _nextScopeId();
      _write(`${_escapeXML(clickCount)}${_markResumeNode(_scope1_id, "#text/0")}`);
      _writeScope(_scope1_id, {
        "_": _serializedScope(_scope0_id)
      });
    }
  });
  _writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/template.marko");