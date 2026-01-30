import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    foo
  } = input;
  _._for_of(foo, ({
    desc,
    ...item
  }) => {
    const $scope1_id = _._scope_id();
    _._html(`<span${_._attrs(item, "#span/0", $scope1_id, "span")}>`);
    _._dynamic_tag($scope1_id, "#text/1", desc, {}, 0, 0, _._serialize_guard($scope0_reason, /* input.foo */0));
    _._html(`</span>${_._el_resume($scope1_id, "#span/0")}`);
    _._script($scope1_id, "__tests__/tags/child.marko_1_item");
    _._scope($scope1_id, {
      item
    }, "__tests__/tags/child.marko", "2:2", {
      item: "2:17"
    });
  }, 0, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.foo */0), _._serialize_guard($scope0_reason, /* input.foo */0), _._serialize_guard($scope0_reason, /* input.foo */0), 0, 1);
  _._serialize_if($scope0_reason, /* input.foo */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});