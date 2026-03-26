import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_children = _._serialize_guard($scope0_reason, /* input.children */0),
    $si__input_children = _._serialize_if($scope0_reason, /* input.children */0);
  const $scope0_id = _._scope_id();
  _._html("<div>");
  _._for_of(input.children, child => {
    const $scope1_id = _._scope_id();
    _._html(`<span>${_._escape(child.text)}${_._el_resume($scope1_id, "#text/0", ($sg__input_children))}</span>`);
    ($si__input_children) && _._scope($scope1_id, {}, "__tests__/template.marko", "2:4");
  }, "id", $scope0_id, "#div/0", $sg__input_children, $sg__input_children, ($sg__input_children), "</div>", 1);
  ($si__input_children) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);