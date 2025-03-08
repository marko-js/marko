import * as _$ from "@marko/runtime-tags/debug/html";
import _FancyButton from "./tags/FancyButton.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _clickCount_closures = new Set();
  const clickCount = 0;
  const _childScope = _$.peekNextScope();
  _FancyButton({
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", _scope0_id),
    content: _$.registerContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.writeSubscribe(_clickCount_closures, _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "clickCount(": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch(_scope1_id);
    }, _scope0_id)
  });
  _$.writeScope(_scope0_id, {
    clickCount,
    "clickCount!": _clickCount_closures,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});