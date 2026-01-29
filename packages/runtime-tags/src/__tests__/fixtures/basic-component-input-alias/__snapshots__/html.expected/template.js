import _myButton from "./tags/my-button.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let clickCount = 0;
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason(/* clickCount */1);
  _myButton({
    text: clickCount,
    onClick: _._resume(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", $scope0_id)
  });
  _._scope($scope0_id, {
    clickCount,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _._resume_branch($scope0_id);
});