import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    name,
    write
  } = input;
  _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_name_write");
  _$.writeScope(_scope0_id, {
    "name/3": name,
    "write/4": write
  }, "__tests__/tags/child.marko", 0, {
    "name/3": "1:9",
    "write/4": "1:15"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);