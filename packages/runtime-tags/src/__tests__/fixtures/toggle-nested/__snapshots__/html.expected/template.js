import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _value1__closures = new Set();
  const _value2__closures = new Set();
  let _ifScopeId3, _ifBranch3;
  const {
    show,
    value1,
    value2
  } = input;
  _$.write("<div>");
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId, _ifBranch;
      let _ifScopeId2, _ifBranch2;
      _$.resumeSingleNodeConditional(() => {
        if (value1) {
          const _scope2_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value1)}${_$.markResumeNode(_scope2_id, "#text/0")}</span>`);
          _$.writeSubscribe(_value1__closures, _$.writeScope(_scope2_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "value1(": 0
          }, "__tests__/template.marko", "4:6"));
          _ifBranch = 0;
          _ifScopeId = _scope2_id;
        }
      }, _scope1_id, "#text/0");
      _$.resumeSingleNodeConditional(() => {
        if (value2) {
          const _scope3_id = _$.nextScopeId();
          _$.write(`<span>${_$.escapeXML(value2)}${_$.markResumeNode(_scope3_id, "#text/0")}</span>`);
          _$.writeSubscribe(_value2__closures, _$.writeScope(_scope3_id, {
            _: _$.ensureScopeWithId(_scope1_id),
            "value2(": 0
          }, "__tests__/template.marko", "5:6"));
          _ifBranch2 = 0;
          _ifScopeId2 = _scope3_id;
        }
      }, _scope1_id, "#text/1");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "#text/0(": _ifBranch,
        "#text/0!": _$.getScopeById(_ifScopeId),
        "#text/1(": _ifBranch2,
        "#text/1!": _$.getScopeById(_ifScopeId2)
      }, "__tests__/template.marko", "3:4");
      _ifBranch3 = 0;
      _ifScopeId3 = _scope1_id;
    }
  }, _scope0_id, "#div/0");
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    value1,
    value2,
    "value1!": _value1__closures,
    "value2!": _value2__closures,
    "#div/0(": _ifBranch3,
    "#div/0!": _$.getScopeById(_ifScopeId3)
  }, "__tests__/template.marko", 0, {
    value1: "1:15",
    value2: "1:23"
  });
});