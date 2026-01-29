import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    class: _class,
    ...rest
  } = input;
  _._html("<p");
  _._attrs_content({
    class: input.class,
    ...rest
  }, "#p/0", $scope0_id, "p");
  _._html(`</p>${_._el_resume($scope0_id, "#p/0")}`);
  _._script($scope0_id, "__tests__/tags/child.marko_0_input_class_rest");
  _._scope($scope0_id, {
    input_class: input.class,
    rest
  }, "__tests__/tags/child.marko", 0, {
    input_class: ["input.class"],
    rest: "1:28"
  });
});