import _myButton from "./tags/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const clickCount = 0;
  const _childScope = _$.peekNextScope();
  _myButton({
    value: {
      text: clickCount
    },
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", _scope0_id)
  });
  const _childScope2 = _$.peekNextScope();
  _myButton({
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick_0", _scope0_id),
    value: _$.attrTag({
      text: clickCount
    })
  });
  _$.writeScope(_scope0_id, {
    "clickCount/2": clickCount,
    "#childScope/0": _$.writeExistingScope(_childScope),
    "#childScope/1": _$.writeExistingScope(_childScope2)
  }, "__tests__/template.marko", 0, {
    "clickCount/2": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);