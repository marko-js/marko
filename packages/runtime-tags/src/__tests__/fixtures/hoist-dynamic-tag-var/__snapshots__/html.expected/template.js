import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml/hoist");
  let _ifScopeId2, _ifBranch2;
  let _ifScopeId3;
  let _ifScopeId4;
  let _ifScopeId5;
  _$.resumeSingleNodeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId, _ifBranch;
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const _scope2_id = _$.nextScopeId();
          const _dynamicScope = _$.peekNextScope();
          const setHtml = _$.dynamicTagInput(_scope2_id, "#text/0", 1 && Child, {}, void 0);
          _$.setTagVar(_scope2_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_2_setHtml/var");
          _$.writeScope(_scope2_id, {
            "#text/0!": _$.writeExistingScope(_dynamicScope),
            "#text/0(": _$.dynamicTagId(1 && Child),
            setHtml
          }, "__tests__/template.marko", "4:4");
          _ifBranch = 0;
          _ifScopeId = _scope2_id;
        }
      }, _scope1_id, "#text/0");
      _$.writeScope(_scope1_id, {
        "#text/0(": _ifBranch,
        "#text/0!": _$.getScopeById(_ifScopeId),
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:2");
      _ifBranch2 = 0;
      _ifScopeId2 = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  const _childScope = _$.peekNextScope();
  _thing({
    value: _hoisted_setHtml
  });
  if (true) {
    const _scope3_id = _$.nextScopeId();
    const _dynamicScope2 = _$.peekNextScope();
    const setHtml2 = _$.dynamicTagInput(_scope3_id, "#text/0", 1 && Child, {}, void 0);
    _$.setTagVar(_scope3_id, "#scopeOffset/1", _dynamicScope2, "__tests__/template.marko_3_setHtml2/var");
    _$.writeScope(_scope3_id, {
      "#text/0!": _$.writeExistingScope(_dynamicScope2),
      "#text/0(": _$.dynamicTagId(1 && Child),
      setHtml2
    }, "__tests__/template.marko", "15:2");
    _ifScopeId3 = _scope3_id;
  }
  if (true) {
    const _scope4_id = _$.nextScopeId();
    const _dynamicScope3 = _$.peekNextScope();
    const setHtml3 = _$.dynamicTagInput(_scope4_id, "#text/0", 1 && Child, {}, void 0);
    _$.setTagVar(_scope4_id, "#scopeOffset/1", _dynamicScope3, "__tests__/template.marko_4_setHtml3/var");
    _$.writeScope(_scope4_id, {
      "#text/0!": _$.writeExistingScope(_dynamicScope3),
      "#text/0(": _$.dynamicTagId(1 && Child),
      setHtml3
    }, "__tests__/template.marko", "24:2");
    _ifScopeId4 = _scope4_id;
  }
  if (true) {
    const _scope5_id = _$.nextScopeId();
    _$.writeEffect(_scope5_id, "__tests__/template.marko_5");
    _$.writeScope(_scope5_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "28:2");
    _ifScopeId5 = _scope5_id;
  }
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    input_show: input.show,
    "#text/0(": _ifBranch2,
    "#text/0!": _$.getScopeById(_ifScopeId2),
    "#childScope/1": _$.writeExistingScope(_childScope),
    "#text/2!": _$.getScopeById(_ifScopeId3),
    "#text/3!": _$.getScopeById(_ifScopeId4),
    "#text/4!": _$.getScopeById(_ifScopeId5)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});