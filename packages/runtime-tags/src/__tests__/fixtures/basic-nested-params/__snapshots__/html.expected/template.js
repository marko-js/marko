import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _y_closures = new Set();
  let x = 1;
  let y = 2;
  _$.write(`<button>Inc</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _childScope2 = _$.peekNextScope();
  _child({
    value: x,
    content: _$.registerContent("__tests__/template.marko_1_renderer", outer => {
      const _scope1_id = _$.nextScopeId();
      const _outer$child_content_closures = new Set();
      const _childScope = _$.peekNextScope();
      _child({
        value: y,
        content: _$.registerContent("__tests__/template.marko_2_renderer", inner => {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<div>${_$.escapeXML(outer)}${_$.markResumeNode(_scope2_id, "#text/0")}.<!>${_$.escapeXML(inner)}${_$.markResumeNode(_scope2_id, "#text/1")}</div>`);
          _$.writeSubscribe(_outer$child_content_closures, _$.writeScope(_scope2_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "outer(": 0
          }, "__tests__/template.marko", "7:6"));
          _$.resumeClosestBranch(_scope2_id);
        }, _scope1_id)
      });
      _$.writeSubscribe(_y_closures, _$.writeScope(_scope1_id, {
        outer,
        "outer!": _outer$child_content_closures,
        "#childScope/0": _$.writeExistingScope(_childScope),
        _: _$.ensureScopeWithId(_scope0_id),
        "y(": 0
      }, "__tests__/template.marko", "6:2", {
        outer: "6:8"
      }));
      _$.resumeClosestBranch(_scope1_id);
    }, _scope0_id)
  });
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x,
    y,
    "y!": _y_closures,
    "#childScope/1": _$.writeExistingScope(_childScope2)
  }, "__tests__/template.marko", 0, {
    x: "1:6",
    y: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});