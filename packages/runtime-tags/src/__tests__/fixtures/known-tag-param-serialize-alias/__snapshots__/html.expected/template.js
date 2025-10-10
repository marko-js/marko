import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  const Child = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      const {
        a,
        b
      } = input;
      _._html(`<div>${_._escape(a)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* input.a */0))}</div><div>${_._escape(b)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($scope1_reason, /* b */1))}</div>`);
      _._script($scope1_id, "__tests__/template.marko_1_input_a");
      _._script($scope1_id, "__tests__/template.marko_1_a");
      _._scope($scope1_id, {
        input_a: input.a
      }, "__tests__/template.marko", "1:2", {
        input_a: ["input.a", "1:15"]
      });
    })
  };
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.a */0: _._serialize_guard($scope0_reason, /* input.a */1),
    /* b */1: _._serialize_guard($scope0_reason, /* input.b */2)
  });
  Child.content({
    a: input.a,
    b: input.b
  });
  _._serialize_guard($scope0_reason, /* input.a, input.b */0) && _._scope($scope0_id, {
    "#childScope/0": _._serialize_if($scope0_reason, /* input.a, input.b */0) && _._existing_scope($childScope)
  }, "__tests__/template.marko", 0);
});