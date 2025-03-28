import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let value = "b";
  const tag = "select";
  /* @__PURE__ */_$.dynamicTag(_scope0_id, "#text/0", tag ? "select" : {}, {
    value,
    valueChange: _$.register(function (v) {
      value = v;
    }, "__tests__/template.marko_0/valueChange", _scope0_id)
  }, _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`<option${_$.attrs({
      value: "a"
    }, "#option/0", _scope1_id, "option")}>A</option>${_$.markResumeNode(_scope1_id, "#option/0")}<option${_$.attrs({
      value: "b"
    }, "#option/1", _scope1_id, "option")}>B</option>${_$.markResumeNode(_scope1_id, "#option/1")}<option${_$.attrs({
      value: "c"
    }, "#option/2", _scope1_id, "option")}>C</option>${_$.markResumeNode(_scope1_id, "#option/2")}`);
    _$.writeEffect(_scope1_id, "__tests__/template.marko_1");
  }, _scope0_id), 0, 1);
  _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeScope(_scope0_id, {
    tag
  }, "__tests__/template.marko", 0, {
    tag: "2:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});