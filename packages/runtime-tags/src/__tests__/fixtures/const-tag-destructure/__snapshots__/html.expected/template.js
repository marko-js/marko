import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let z = {
    x: 1,
    y: 2
  };
  const {
    x,
    y
  } = z;
  _$.write(`<div>${_$.escapeXML(x)}</div>${_$.escapeXML(y)}`);
  _$.resumeClosestBranch(_scope0_id);
});