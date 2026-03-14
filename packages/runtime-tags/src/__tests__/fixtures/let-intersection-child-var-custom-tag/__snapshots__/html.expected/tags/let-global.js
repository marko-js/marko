var subsByKey;
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/let-global.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = _.$global()[input.value];
  const $return = value;
  _._script($scope0_id, "__tests__/tags/let-global.marko_0_input_value");
  _._scope($scope0_id, {
    input_value: input.value,
    "#TagVariableChange": _._resume(function (next) {
      _.$global()[input.value] = next;
      subsByKey[input.value]?.forEach(cb => cb());
    }, "__tests__/tags/let-global.marko_0/valueChange", $scope0_id) || void 0
  }, "__tests__/tags/let-global.marko", 0, {
    input_value: ["input.value"]
  });
  _._resume_branch($scope0_id);
  return $return;
});