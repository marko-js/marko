import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/display-intersection.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  const dummy = {};
  _$.write(`<div>${_$.escapeXML((dummy, value))}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    value,
    dummy
  }, "__tests__/tags/display-intersection.marko", 0, {
    value: "1:10",
    dummy: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});