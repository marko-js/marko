import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_el = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_el/hoist");
  _$.resumeSingleNodeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const _scope2_id = _$.nextScopeId();
          const el = _$.nodeRef(_scope2_id, "__tests__/template.marko_2/#div");
          _$.write(`<div></div>${_$.markResumeNode(_scope2_id, "#div/0")}`);
          _child({
            value: el
          });
          _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "2:4");
          return 0;
        }
      }, _scope1_id, "#text/0", 1);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  const _childScope = _$.peekNextScope();
  _child({
    value: _hoisted_el
  });
  _$.write("<hr>");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const _scope3_id = _$.nextScopeId();
      const el2 = _$.nodeRef();
      _$.write(`<div></div>${_$.markResumeNode(_scope3_id, "#div/0")}`);
      _$.writeScope(_scope3_id, {}, "__tests__/template.marko", "19:2");
      return 0;
    }
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    input_show: input.show,
    "#childScope/1": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});