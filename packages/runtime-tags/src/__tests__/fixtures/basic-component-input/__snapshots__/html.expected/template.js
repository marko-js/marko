import _myButton from "./tags/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const _childScope = _$.peekNextScope();
  _myButton({
    text: clickCount,
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    "clickCount": clickCount,
    "#childScope/0": _$.writeExistingScope(_childScope)
  });
  _$.markResumeCleanup(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);