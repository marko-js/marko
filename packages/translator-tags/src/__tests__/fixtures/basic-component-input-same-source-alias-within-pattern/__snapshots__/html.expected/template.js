import { register as _register, peekNextScope as _peekNextScope, writeExistingScope as _writeExistingScope, attrTag as _attrTag, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
import _myButton from "./components/my-button.marko";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const _childScope = _peekNextScope();
  _myButton({
    value: {
      text: clickCount
    },
    onClick: _register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick", _scope0_id)
  });
  const _childScope2 = _peekNextScope();
  _myButton({
    onClick: _register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko_0/onClick_0", _scope0_id),
    value: _attrTag({
      text: clickCount
    })
  });
  _writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _writeExistingScope(_childScope),
    "#childScope/1": _writeExistingScope(_childScope2)
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/template.marko");