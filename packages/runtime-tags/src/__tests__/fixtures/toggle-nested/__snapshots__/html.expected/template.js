import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $serialize = _._get_serialize_reason();
  const $scope0_id = _._scope_id();
  const $value__closures = new Set();
  const $value2__closures = new Set();
  const {
    show,
    value1,
    value2
  } = input;
  _._html("<div>");
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._if(() => {
        if (value1) {
          const $scope2_id = _._scope_id();
          _._html(`<span>${_._escape(value1)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($serialize, /* input.value1 */5))}</span>`);
          _._serialize_guard($serialize, /* input.value1 */5) && _._subscribe($value__closures, _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id),
            "ClosureSignalIndex:value1": _._serialize_if($serialize, /* input.value1 */5) && 0
          }, "__tests__/template.marko", "4:6"));
          return 0;
        }
      }, $scope1_id, "#text/0", _._serialize_guard($serialize, /* input.value1 */5), _._serialize_guard($serialize, /* input.value1 */5), _._serialize_guard($serialize, /* input.value1, input.value2 */2), 0, 1);
      _._if(() => {
        if (value2) {
          const $scope3_id = _._scope_id();
          _._html(`<span>${_._escape(value2)}${_._el_resume($scope3_id, "#text/0", _._serialize_guard($serialize, /* input.value2 */6))}</span>`);
          _._serialize_guard($serialize, /* input.value2 */6) && _._subscribe($value2__closures, _._scope($scope3_id, {
            _: _._scope_with_id($scope1_id),
            "ClosureSignalIndex:value2": _._serialize_if($serialize, /* input.value2 */6) && 0
          }, "__tests__/template.marko", "5:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", _._serialize_guard($serialize, /* input.value2 */6), _._serialize_guard($serialize, /* input.value2 */6), _._serialize_guard($serialize, /* input.value1, input.value2 */2), 0, 1);
      _._serialize_guard($serialize, /* input.show, input.value1, input.value2 */3) && _._scope($scope1_id, {
        _: _._serialize_if($serialize, /* input.value1, input.value2 */2) && _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#div/0", _._serialize_guard($serialize, /* input.show, input.value1, input.value2 */3), _._serialize_guard($serialize, /* input.show */4), _._serialize_guard($serialize, /* input.show */4), "</div>");
  _._serialize_guard($serialize, /* input.show, input.value1, input.value2 */3) && _._scope($scope0_id, {
    value1: _._serialize_if($serialize, /* input.show, input.value1 */0) && value1,
    value2: _._serialize_if($serialize, /* input.show, input.value2 */1) && value2,
    "ClosureScopes:value1": _._serialize_if($serialize, /* input.value1 */5) && $value__closures,
    "ClosureScopes:value2": _._serialize_if($serialize, /* input.value2 */6) && $value2__closures
  }, "__tests__/template.marko", 0, {
    value1: "1:15",
    value2: "1:23"
  });
});