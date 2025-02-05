import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const user = {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  };
  const fullName = user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
  _$.write(`<p>${_$.escapeXML(fullName)}${_$.markResumeNode(_scope0_id, "#text/0")}</p>`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);