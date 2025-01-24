import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    name,
    write
  } = input;
  _$.write(`<p>${_$.escapeXML(name)}${_$.markResumeNode(_scope0_id, "#text/0")}</p>`);
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_name_write");
  _$.writeScope(_scope0_id, {
    "name": name,
    "write": write
  });
  _$.markResumeParentBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _renderer);