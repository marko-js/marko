import _child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
import _thing from "./tags/thing.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _hoisted_setHtml = _$.hoist(_scope0_id, "__tests__/template.marko_0__hoisted_setHtml/hoist");
  _$.resumeSingleNodeConditional(() => {
    if (input.show) {
      const _scope1_id = _$.nextScopeId();
      _$.resumeSingleNodeConditional(() => {
        if (input.show) {
          const _scope2_id = _$.nextScopeId();
          const _childScope = _$.peekNextScope();
          const setHtml = _child({});
          _$.setTagVar(_scope2_id, "#scopeOffset/1", _childScope, "__tests__/template.marko_2_setHtml/var");
          _$.writeScope(_scope2_id, {
            "#childScope/0": _$.writeExistingScope(_childScope),
            setHtml
          }, "__tests__/template.marko", "2:4");
          return 0;
        }
      }, _scope1_id, "#text/0", 1);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "1:2");
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  const _childScope2 = _$.peekNextScope();
  _thing({
    value: _hoisted_setHtml
  });
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const _scope3_id = _$.nextScopeId();
      const _childScope3 = _$.peekNextScope();
      const setHtml2 = _child({});
      _$.setTagVar(_scope3_id, "#scopeOffset/1", _childScope3, "__tests__/template.marko_3_setHtml2/var");
      _$.writeScope(_scope3_id, {
        "#childScope/0": _$.writeExistingScope(_childScope3),
        setHtml2
      }, "__tests__/template.marko", "13:2");
      return 0;
    }
  }, _scope0_id, "#text/2");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const _scope4_id = _$.nextScopeId();
      const _childScope4 = _$.peekNextScope();
      const setHtml3 = _child({});
      _$.setTagVar(_scope4_id, "#scopeOffset/1", _childScope4, "__tests__/template.marko_4_setHtml3/var");
      _$.writeScope(_scope4_id, {
        "#childScope/0": _$.writeExistingScope(_childScope4),
        setHtml3
      }, "__tests__/template.marko", "22:2");
      return 0;
    }
  }, _scope0_id, "#text/3");
  _$.resumeSingleNodeConditional(() => {
    if (true) {
      const _scope5_id = _$.nextScopeId();
      _$.writeEffect(_scope5_id, "__tests__/template.marko_5");
      _$.writeScope(_scope5_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "26:2");
      return 0;
    }
  }, _scope0_id, "#text/4");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    input_show: input.show,
    "#childScope/1": _$.writeExistingScope(_childScope2)
  }, "__tests__/template.marko", 0, {
    input_show: ["input.show"]
  });
});