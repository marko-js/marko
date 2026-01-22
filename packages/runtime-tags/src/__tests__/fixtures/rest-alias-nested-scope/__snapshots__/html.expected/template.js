import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    value
  } = input;
  const {
    foo: $foo,
    ...rest
  } = value || {};
  _._if(() => {
    if (value) {
      const $scope1_id = _._scope_id();
      const {
        foo
      } = value;
      _._html(` -- ${_._sep(_._serialize_guard($scope0_reason, /* input.value.foo */1))}${_._escape(foo)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value.foo */1))}<span`);
      _._attrs_content(rest, "#span/1", $scope1_id, "span");
      _._html(`</span>${_._el_resume($scope1_id, "#span/1")}`);
      _._script($scope1_id, "__tests__/template.marko_1_rest");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:2");
      return 0;
    }
  }, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value */0), _._serialize_guard($scope0_reason, /* input.value */0), _._serialize_guard($scope0_reason, /* input.value */0));
  _._scope($scope0_id, {
    foo: _._serialize_if($scope0_reason, /* input.value */0) && value?.foo,
    rest
  }, "__tests__/template.marko", 0, {
    foo: "4:12",
    rest: "4:20"
  });
});