import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  const {
    value
  } = input;
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (value) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "3:4");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write("<span></span><span></span></div>");
  _$.writeScope(_scope0_id, {
    value: value,
    "#text/0(": _ifBranch,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    value: "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);