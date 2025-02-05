import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<em>Testing</em> <!>${_$.toString(value)}${_$.markResumeNode(_scope0_id, "#text/0")}`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);