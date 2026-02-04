import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/my-button.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<button");
  _._attrs_content(input, "#button/0", $scope0_id, "button");
  _._html(`</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/tags/my-button.marko_0_input");
  _._scope($scope0_id, {
    input
  }, "__tests__/tags/my-button.marko", 0, {
    input: 0
  });
});