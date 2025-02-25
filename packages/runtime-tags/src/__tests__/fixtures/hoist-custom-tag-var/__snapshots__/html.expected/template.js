import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_el = _$.hoist(_scope0_id, "__tests__/template.marko_0/_hoisted_el");
  let _ifScopeId2, _ifBranch2;
  _$.resumeSingleNodeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId, _ifBranch;
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const _scope2_id = _$.nextScopeId();
          const el = _$.nodeRef();
          _$.write(`<div></div>${_$.markResumeNode(_scope2_id, "#div/0")}`);
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
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0__hoisted_el");
  _$.writeScope(_scope0_id, {
    input_show: input.show,
    _hoisted_el: _hoisted_el,
    "#text/0(": _ifBranch2,
    "#text/0!": _$.getScopeById(_ifScopeId2)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"],
    _hoisted_el: "3:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);