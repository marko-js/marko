import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/radio.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<input${_._attrs({
    type: "radio",
    ...input
  }, "#input/0", $scope0_id, "input")}>${_._el_resume($scope0_id, "#input/0")}`);
  _._script($scope0_id, "__tests__/tags/radio.marko_0_input");
  _._scope($scope0_id, {
    input
  }, "__tests__/tags/radio.marko", 0, {
    input: 0
  });
});