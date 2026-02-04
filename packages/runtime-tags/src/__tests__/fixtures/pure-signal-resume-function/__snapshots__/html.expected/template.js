import _myButton from "./tags/my-button.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const test = "foo";
  _myButton({
    onClick: _._resume(function () {
      console.log(test);
    }, "__tests__/template.marko_0/onClick", $scope0_id),
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      _._html("Click");
    }, $scope0_id)
  });
  _._scope($scope0_id, {
    test
  }, "__tests__/template.marko", 0, {
    test: "1:7"
  });
});