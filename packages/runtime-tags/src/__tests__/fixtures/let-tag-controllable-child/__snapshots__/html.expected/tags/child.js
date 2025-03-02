import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const state = input.value;
  const otherState = input.value;
  _$.write(`<button>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope0_id, "#text/1")}|<!>${_$.escapeXML(state)}${_$.markResumeNode(_scope0_id, "#text/2")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button>${_$.escapeXML(input.value)}${_$.markResumeNode(_scope0_id, "#text/4")}|<!>${_$.escapeXML(otherState)}${_$.markResumeNode(_scope0_id, "#text/5")}</button>${_$.markResumeNode(_scope0_id, "#button/3")}`);
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_otherState");
  _$.writeEffect(_scope0_id, "__tests__/tags/child.marko_0_state");
  _$.writeScope(_scope0_id, {
    input_value: input.value,
    input_valueChange: input.valueChange,
    state,
    otherState,
    "state@": input.valueChange,
    "otherState@": input["value" + "Change"]
  }, "__tests__/tags/child.marko", 0, {
    input_value: ["input.value"],
    input_valueChange: ["input.valueChange"],
    state: "1:6",
    otherState: "6:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});