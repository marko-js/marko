import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const {
    value
  } = input;
  _._html("<div>");
  _._if(() => {
    if (value) {
      const $scope1_id = _._scope_id();
      _._html(`<span>${_._escape(value)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value */0))}</span>`);
      _._serialize_if($scope0_reason, /* input.value */0) && _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#text/0", _._serialize_guard($scope0_reason, /* input.value */0), _._serialize_guard($scope0_reason, /* input.value */0), _._serialize_guard($scope0_reason, /* input.value */0), 0, 1);
  _._html("<span></span><span></span></div>");
  _._serialize_if($scope0_reason, /* input.value */0) && _._scope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:10"
  });
});