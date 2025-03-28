import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.resumeSingleNodeConditional(() => {
    if (input.value) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "2:4");
      return 0;
    }
  }, _scope0_id, "#div/0", 1, 1);
  _$.write("</div>");
  _$.writeScope(_scope0_id, {
    input_value: input.value
  }, "__tests__/template.marko", 0, {
    input_value: ["input.value"]
  });
});