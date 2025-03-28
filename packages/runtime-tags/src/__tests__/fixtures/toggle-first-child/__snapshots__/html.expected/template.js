import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
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
      return 0;
    }
  }, _scope0_id, "#text/0", 1);
  _$.write("<span></span><span></span></div>");
  _$.writeScope(_scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:10"
  });
});