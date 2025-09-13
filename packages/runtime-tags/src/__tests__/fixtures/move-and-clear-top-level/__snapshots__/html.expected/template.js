import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  _._for_of(input.children, child => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(child.text)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($serialize, /* input.children */0))}`);
    _._serialize_guard($serialize, /* input.children */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
  }, function (c) {
    return c.id;
  }, $scope0_id, "#text/0", _._serialize_guard($serialize, /* input.children */0), _._serialize_guard($serialize, /* input.children */0), _._serialize_guard($serialize, /* input.children */0), 0, 1);
  _._serialize_guard($serialize, /* input.children */0) && _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});