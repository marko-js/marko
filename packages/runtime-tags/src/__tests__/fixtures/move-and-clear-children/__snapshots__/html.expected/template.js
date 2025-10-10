import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    children
  } = input;
  _._html("<div>");
  _._for_of(children, child => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(child.text)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope0_reason, /* input.children */0))}`);
    _._serialize_if($scope0_reason, /* input.children */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "3:4");
  }, function (c) {
    return c.id;
  }, $scope0_id, "#div/0", _._serialize_guard($scope0_reason, /* input.children */0), _._serialize_guard($scope0_reason, /* input.children */0), _._serialize_guard($scope0_reason, /* input.children */0), "</div>", 1);
  _._serialize_if($scope0_reason, /* input.children */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});