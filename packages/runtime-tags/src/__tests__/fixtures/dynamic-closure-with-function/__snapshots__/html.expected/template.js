import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_b = _._serialize_guard($scope0_reason, /* input.b */5),
    $sg__input_a = _._serialize_guard($scope0_reason, /* input.a */4),
    $si__input_a__OR__input_b = _._serialize_if($scope0_reason, /* input.a, input.b */1),
    $si__input_c = _._serialize_if($scope0_reason, /* input.c */3),
    $si__input_c__OR__input_a__OR__input_b = _._serialize_if($scope0_reason, /* input.c, input.a, input.b */2);
  const $scope0_id = _._scope_id();
  const $bar2__closures = new Set();
  const bar = _._resume(function (test) {
    return input.c + test;
  }, "__tests__/template.marko_0/bar", $scope0_id);
  _._if(() => {
    if (input.a) {
      const $scope1_id = _._scope_id();
      const foo = "foo";
      _._if(() => {
        if (input.b) {
          const $scope2_id = _._scope_id();
          _._html(`<div>${_._escape(bar(foo))}${_._el_resume($scope2_id, "#text/0", (_._serialize_guard($scope0_reason, /* input.c */3)))}</div>`);
          ($si__input_c__OR__input_a__OR__input_b) && _._subscribe($bar2__closures, _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id),
            "ClosureSignalIndex:bar": ($si__input_c) && 0
          }, "__tests__/template.marko", "6:3"));
          return 0;
        }
      }, $scope1_id, "#text/0", $sg__input_b, ($sg__input_b), ($sg__input_b), 0, 1);
      (_._serialize_if($scope0_reason, /* input.c, input.b */0)) && _._scope($scope1_id, {
        foo,
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:1", {
        foo: "4:9"
      });
      return 0;
    }
  }, $scope0_id, "#text/0", (_._serialize_guard($scope0_reason, /* input.a, input.b */1)), ($sg__input_a), ($sg__input_a));
  ($si__input_c__OR__input_a__OR__input_b) && _._scope($scope0_id, {
    input_c: ($si__input_a__OR__input_b) && input.c,
    input_b: (_._serialize_if($scope0_reason, /* input.a */4)) && input.b,
    bar: ($si__input_a__OR__input_b) && bar,
    "ClosureScopes:bar": ($si__input_c) && $bar2__closures
  }, "__tests__/template.marko", 0, {
    input_c: ["input.c"],
    input_b: ["input.b"],
    bar: "1:7"
  });
}, 1);