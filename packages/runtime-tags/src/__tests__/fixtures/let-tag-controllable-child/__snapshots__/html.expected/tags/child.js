import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  let state = input.value;
  let otherState = input.value;
  _$.write(`<button>${_$.escapeXML(input.value)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.value */0))}|<!>${_$.escapeXML(state)}${_$.markResumeNode($scope0_id, "#text/2")}</button>${_$.markResumeNode($scope0_id, "#button/0")}<button>${_$.escapeXML(input.value)}${_$.markResumeNode($scope0_id, "#text/4", _$.serializeGuard($serialize, /* input.value */0))}|<!>${_$.escapeXML(otherState)}${_$.markResumeNode($scope0_id, "#text/5")}</button>${_$.markResumeNode($scope0_id, "#button/3")}`);
  _$.writeEffect($scope0_id, "__tests__/tags/child.marko_0_otherState");
  _$.writeEffect($scope0_id, "__tests__/tags/child.marko_0_state");
  _$.writeScope($scope0_id, {
    input_value: _$.serializeIf($serialize, /* input.valueChange */1) && input.value,
    input_valueChange: _$.serializeIf($serialize, /* input.value */0) && input.valueChange,
    state,
    otherState,
    "TagVariableChange:state": input.valueChange,
    "TagVariableChange:otherState": input["value" + "Change"]
  }, "__tests__/tags/child.marko", 0, {
    input_value: ["input.value"],
    input_valueChange: ["input.valueChange"],
    state: "1:6",
    otherState: "6:6"
  });
  _$.resumeClosestBranch($scope0_id);
});