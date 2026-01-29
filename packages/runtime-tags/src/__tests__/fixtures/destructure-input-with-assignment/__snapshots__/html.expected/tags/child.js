import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    valueChange: $valueChange,
    value,
    ...rest
  } = input;
  _._html("<div");
  _._attrs_content(rest, "#div/0", $scope0_id, "div");
  _._html(`</div>${_._el_resume($scope0_id, "#div/0")}`);
  _._script($scope0_id, "__tests__/tags/child.marko_0_rest");
  _._script($scope0_id, "__tests__/tags/child.marko_0_$valueChange");
  _._scope($scope0_id, {
    $valueChange,
    rest
  }, "__tests__/tags/child.marko", 0, {
    $valueChange: "3:11",
    rest: "1:19"
  });
});