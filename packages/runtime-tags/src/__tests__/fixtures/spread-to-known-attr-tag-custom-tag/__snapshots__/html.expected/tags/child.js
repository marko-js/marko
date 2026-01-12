import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<select${_._attr_class(input.class)}>`);
  _._for_of(input.option, option => {
    const $scope1_id = _._scope_id();
    _._html("<option");
    _._attrs_content(option, "#option/0", $scope1_id, "option");
    _._html(`</option>${_._el_resume($scope1_id, "#option/0")}`);
    _._script($scope1_id, "__tests__/tags/child.marko_1_option");
    _._scope($scope1_id, {
      option
    }, "__tests__/tags/child.marko", "2:4", {
      option: "2:8"
    });
  }, 0, $scope0_id, "#select/0", _._serialize_guard($scope0_reason, /* input.option */1), _._serialize_guard($scope0_reason, /* input.class, input.option */0), _._serialize_guard($scope0_reason, /* input.option */1), "</select>", 1);
  _._serialize_if($scope0_reason, /* input.class, input.option */0) && _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});