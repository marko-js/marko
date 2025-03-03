import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_el = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_el/hoist");
  let _ifScopeId2, _ifBranch2;
  let _ifScopeId3;
  _$.resumeSingleNodeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId, _ifBranch;
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const _scope2_id = _$.nextScopeId();
          const el = _$.nodeRef(_scope2_id, "__tests__/template.marko_2/#div");
          _$.write(`<div></div>${_$.markResumeNode(_scope2_id, "#div/0")}`);
          _child({
            value: el
          });
          _$.writeScope(_scope2_id, {}, "__tests__/template.marko", "2:4");
          _ifBranch = 0;
          _ifScopeId = _scope2_id;
        }
      }, _scope1_id, "#text/0");
      _$.writeScope(_scope1_id, {
        "#text/0(": _ifBranch,
        "#text/0!": _$.getScopeById(_ifScopeId),
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "1:2");
      _ifBranch2 = 0;
      _ifScopeId2 = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  const _childScope = _$.peekNextScope();
  _child({
    value: _hoisted_el
  });
  _$.write("<hr>");
  if (true) {
    const _scope3_id = _$.nextScopeId();
    const el2 = _$.nodeRef();
    _$.write(`<div></div>${_$.markResumeNode(_scope3_id, "#div/0")}`);
    _$.writeScope(_scope3_id, {}, "__tests__/template.marko", "19:2");
    _ifScopeId3 = _scope3_id;
  }
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    input_show: input.show,
    "#text/0(": _ifBranch2,
    "#text/0!": _$.getScopeById(_ifScopeId2),
    "#childScope/1": _$.writeExistingScope(_childScope),
    "#text/2!": _$.getScopeById(_ifScopeId3)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);