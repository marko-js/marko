import * as _$ from "@marko/runtime-tags/debug/html";
import _myButton from "./components/my-button.marko";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const _childScope = _$.peekNextScope();
  _myButton({
    text: clickCount,
    onClick: _$.register(function () {
      clickCount++;
    }, "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/template.marko_0/onClick", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/template.marko", _renderer);