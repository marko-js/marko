import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  const dummy = {};
  _$.write(`<div>${_$.escapeXML((dummy, value))}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    "value": value,
    "dummy": dummy
  });
  _$.markResumeParentBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/display-intersection.marko", _renderer);