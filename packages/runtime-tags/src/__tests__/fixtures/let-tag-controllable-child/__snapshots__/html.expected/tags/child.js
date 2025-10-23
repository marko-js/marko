import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  let state = input.value;
  let otherState = input["value"];
  _._html(`<button>${_._escape(input.value)}${_._el_resume($scope0_id, "#text/1", _._serialize_guard($scope0_reason, /* input.value */0))}|<!>${_._escape(state)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/0")}<button>${_._escape(input.value)}${_._el_resume($scope0_id, "#text/4", _._serialize_guard($scope0_reason, /* input.value */0))}|<!>${_._escape(otherState)}${_._el_resume($scope0_id, "#text/5")}</button>${_._el_resume($scope0_id, "#button/3")}`);
  _._script($scope0_id, "__tests__/tags/child.marko_0_otherState");
  _._script($scope0_id, "__tests__/tags/child.marko_0_state");
  _._scope($scope0_id, {
    input_value: _._serialize_if($scope0_reason, /* input.valueChange */1) && input.value,
    input_valueChange: _._serialize_if($scope0_reason, /* input.value */0) && input.valueChange,
    state,
    otherState,
    "TagVariableChange:state": input.valueChange || void 0,
    "TagVariableChange:otherState": input["value" + "Change"] || void 0
  }, "__tests__/tags/child.marko", 0, {
    input_value: ["input.value"],
    input_valueChange: ["input.valueChange"],
    state: "1:6",
    otherState: "6:6"
  });
  _._resume_branch($scope0_id);
});