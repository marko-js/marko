import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const state = input.value;
  const _state_change = input.valueChange;
  const otherState = input["value"];
  const _otherState_change = input["value" + "Change"];
  _$.write(`<button>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope0_id, "#text/1")}|<!>${_$.escapeXML(state)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope0_id, "#text/4")}|<!>${_$.escapeXML(otherState)}${_$.markResumeNode(_scope0_id, "#text/5")}</button>${_$.markResumeNode(_scope0_id, "#button/3")}`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__otherState_change_otherState");
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__state_change_state");
  _$.writeScope(_scope0_id, {
    "_state_change": _state_change,
    "state": state,
    "_otherState_change": _otherState_change,
    "otherState": otherState
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko", _renderer);