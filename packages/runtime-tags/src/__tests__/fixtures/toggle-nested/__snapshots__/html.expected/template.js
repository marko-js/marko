import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_value = _._serialize_guard($scope0_reason, /* input.value1 */5),
    $sg__input_value1__OR__input_value = _._serialize_guard($scope0_reason, /* input.value1, input.value2 */2),
    $sg__input_value2 = _._serialize_guard($scope0_reason, /* input.value2 */6),
    $sg__input_show = _._serialize_guard($scope0_reason, /* input.show */4),
    $si__input_show__OR__input_value = _._serialize_if($scope0_reason, /* input.show, input.value1 */0),
    $si__input_show__OR__input_value2 = _._serialize_if($scope0_reason, /* input.show, input.value2 */1),
    $si__input_show__OR__input_value1__OR__input_value = _._serialize_if($scope0_reason, /* input.show, input.value1, input.value2 */3);
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
          _._html(`<span>${_._escape(value1)}${_._el_resume($scope2_id, "#text/0", ($sg__input_value))}</span>`);
          ($si__input_show__OR__input_value) && _._subscribe($value__closures, _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id)
          }, "__tests__/template.marko", "4:6"));
          return 0;
        }
      }, $scope1_id, "#text/0", $sg__input_value, ($sg__input_value), ($sg__input_value1__OR__input_value), 0, 1);
      _._if(() => {
        if (value2) {
          const $scope3_id = _._scope_id();
          _._html(`<span>${_._escape(value2)}${_._el_resume($scope3_id, "#text/0", ($sg__input_value2))}</span>`);
          ($si__input_show__OR__input_value2) && _._subscribe($value2__closures, _._scope($scope3_id, {
            _: _._scope_with_id($scope1_id)
          }, "__tests__/template.marko", "5:6"));
          return 0;
        }
      }, $scope1_id, "#text/1", $sg__input_value2, ($sg__input_value2), ($sg__input_value1__OR__input_value), 0, 1);
      ($si__input_show__OR__input_value1__OR__input_value) && _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    }
  }, $scope0_id, "#div/0", (_._serialize_guard($scope0_reason, /* input.show, input.value1, input.value2 */3)), ($sg__input_show), ($sg__input_show), "</div>");
  ($si__input_show__OR__input_value1__OR__input_value) && _._scope($scope0_id, {
    value1: ($si__input_show__OR__input_value) && value1,
    value2: ($si__input_show__OR__input_value2) && value2,
    "ClosureScopes:value1": (_._serialize_if($scope0_reason, /* input.value1 */5)) && $value__closures,
    "ClosureScopes:value2": (_._serialize_if($scope0_reason, /* input.value2 */6)) && $value2__closures
  }, "__tests__/template.marko", 0, {
    value1: "1:15",
    value2: "1:23"
  });
}, 1);