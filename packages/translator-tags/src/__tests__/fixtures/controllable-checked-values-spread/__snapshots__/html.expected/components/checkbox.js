import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write(`<input${_$.attrs({
    type: "checkbox",
    ...input
  }, "#input/0", _scope0_id, "input")}>${_$.markResumeNode(_scope0_id, "#input/0")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko_0_input");
  _$.writeScope(_scope0_id, {
    "input": input
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values-spread/components/checkbox.marko", _renderer);