import _myButton from "./components/my-button.marko";
import { register as _register, peekSerializedScope as _peekSerializedScope, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const _childScope = _peekSerializedScope();
  _myButton._({
    text: clickCount,
    onClick: _register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/template.marko_0/onClick", _scope0_id)
  });
  _writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _childScope
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/template.marko");