import _child from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason(),
    $sg__input_a__OR__input_b = _._serialize_guard($scope0_reason, /* input.a, input.b */0),
    $sg__input_a = _._serialize_guard($scope0_reason, /* input.a */1),
    $sg__input_b = _._serialize_guard($scope0_reason, /* input.b */2);
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.a, input.b */0: ($sg__input_a__OR__input_b),
    /* input.a */1: ($sg__input_a),
    /* input.b */2: ($sg__input_b)
  });
  _child({
    a: input.a,
    b: input.b
  });
  const Child = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`<div>${_._escape(input.a)}${_._el_resume($scope1_id, "#text/0", (_._serialize_guard($scope1_reason, /* input.a */1)))}</div><div>${_._escape(input.b)}${_._el_resume($scope1_id, "#text/1", (_._serialize_guard($scope1_reason, /* input.b */2)))}</div>`);
      (_._serialize_if($scope1_reason, /* input.a, input.b */0)) && _._scope($scope1_id, {}, "__tests__/template.marko", "3:2");
    })
  };
  const $childScope2 = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.a, input.b */0: ($sg__input_a__OR__input_b),
    /* input.a */1: ($sg__input_a),
    /* input.b */2: ($sg__input_b)
  });
  Child.content({
    a: input.a,
    b: input.b
  });
  (_._serialize_if($scope0_reason, /* input.a, input.b */0)) && _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope),
    "#childScope/1": _._existing_scope($childScope2)
  }, "__tests__/template.marko", 0);
}, 1);