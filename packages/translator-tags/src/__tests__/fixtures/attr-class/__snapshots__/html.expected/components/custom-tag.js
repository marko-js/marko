import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const {
    class: className
  } = input;
  _$.write(`<div${_$.classAttr(className)}></div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/components/custom-tag.marko", _renderer);