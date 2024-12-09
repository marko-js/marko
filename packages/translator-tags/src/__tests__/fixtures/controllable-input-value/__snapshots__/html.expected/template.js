import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const value = "hello";
  _$.write(`<input${_$.controllable_input_value(_scope0_id, "#input/0", value, _$.register(_new_value => {
    value = _new_value;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-input-value/template.marko_0/valueChange", _scope0_id))} type=text>${_$.markResumeNode(_scope0_id, "#input/0")}<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope0_id, "#text/1")}</span>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-input-value/template.marko_0");
  _$.writeScope(_scope0_id, {
    "value": value
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-input-value/template.marko", _renderer);