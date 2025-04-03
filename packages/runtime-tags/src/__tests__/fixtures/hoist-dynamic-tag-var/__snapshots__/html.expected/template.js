import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml/hoist");
  _$.resumeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      _$.resumeConditional(() => {
        if (input.show) {
          const _scope2_id = _$.nextScopeId();
          const _dynamicScope = _$.peekNextScope();
          const setHtml = _$.dynamicTag(_scope2_id, "#text/0", 1 && Child, {}, 0, 0, 1);
          _$.setTagVar(_scope2_id, "#scopeOffset/1", _dynamicScope, "__tests__/template.marko_2_setHtml/var");
          _$.writeScope(_scope2_id, {
            setHtml
          }, "__tests__/template.marko", "4:4");
          return 0;
        }
      }, _scope1_id, "#text/0", 1);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  const _childScope = _$.peekNextScope();
  _thing({
    value: _hoisted_setHtml
  });
  _$.resumeConditional(() => {
    if (true) {
      const _scope3_id = _$.nextScopeId();
      const _dynamicScope2 = _$.peekNextScope();
      const setHtml2 = _$.dynamicTag(_scope3_id, "#text/0", 1 && Child, {}, 0, 0, 1);
      _$.setTagVar(_scope3_id, "#scopeOffset/1", _dynamicScope2, "__tests__/template.marko_3_setHtml2/var");
      _$.writeScope(_scope3_id, {
        setHtml2
      }, "__tests__/template.marko", "15:2");
      return 0;
    }
  }, _scope0_id, "#text/2");
  _$.resumeConditional(() => {
    if (true) {
      const _scope4_id = _$.nextScopeId();
      const _dynamicScope3 = _$.peekNextScope();
      const setHtml3 = _$.dynamicTag(_scope4_id, "#text/0", 1 && Child, {}, 0, 0, 1);
      _$.setTagVar(_scope4_id, "#scopeOffset/1", _dynamicScope3, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope(_scope4_id, {
        setHtml3
      }, "__tests__/template.marko", "24:2");
      return 0;
    }
  }, _scope0_id, "#text/3");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const _scope5_id = _$.nextScopeId();
      _$.writeEffect(_scope5_id, "__tests__/template.marko_5");
      _$.writeScope(_scope5_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "28:2");
      return 0;
    }
  }, _scope0_id, "#text/4");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    input_show: input.show,
    "#childScope/1": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});