import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    class: _class,
    ...rest
  } = input;
  _._html(" <span");
  _._attrs_content({
    class: _class,
    ...rest
  }, "#span/0", $scope0_id, "span");
  _._html(`</span>${_._el_resume($scope0_id, "#span/0")}`);
  _._script($scope0_id, "__tests__/tags/child.marko_0__class_rest");
  _._scope($scope0_id, {
    _class,
    rest
  }, "__tests__/tags/child.marko", 0, {
    _class: "1:17",
    rest: "1:28"
  });
});