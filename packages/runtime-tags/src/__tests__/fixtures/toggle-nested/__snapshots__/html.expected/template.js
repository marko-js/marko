import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _value1__closures = new Set();
  const _value2__closures = new Set();
  const {
    show,
    value1,
    value2
  } = input;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.resumeSingleNodeConditional(() => {
        if (value1) {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value1)}${_$.markResumeNode(_scope2_id, "#text/0")}</span>`);
          _$.writeSubscribe(_value1__closures, _$.writeScope(_scope2_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "ClosureSignalIndex:value1": 0
          }, "__tests__/template.marko", "4:6"));
          return 0;
        }
      }, _scope1_id, "#text/0", 1);
      _$.resumeSingleNodeConditional(() => {
        if (value2) {
          const _scope3_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value2)}${_$.markResumeNode(_scope3_id, "#text/0")}</span>`);
          _$.writeSubscribe(_value2__closures, _$.writeScope(_scope3_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "ClosureSignalIndex:value2": 0
          }, "__tests__/template.marko", "5:6"));
          return 0;
        }
      }, _scope1_id, "#text/1", 1);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, _scope0_id, "#div/0", 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    value1,
    value2,
    "ClosureScopes:value1": _value1__closures,
    "ClosureScopes:value2": _value2__closures
  }, "__tests__/template.marko", 0, {
    value1: "1:15",
    value2: "1:23"
  });
});