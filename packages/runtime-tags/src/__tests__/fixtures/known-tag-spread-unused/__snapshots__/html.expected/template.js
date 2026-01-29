import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Foo = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`${_._escape(input.foo || "fallback")}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* input.foo */0))}`);
      _._serialize_if($scope1_reason, /* input.foo */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    })
  };
  const Bar = {
    content: _._content("__tests__/template.marko_2_content", input => {
      const $scope2_id = _._scope_id();
      const $scope2_reason = _._scope_reason();
      const $childScope = _._peek_scope_id();
      _._set_serialize_reason(_._serialize_guard($scope2_reason, /* input.foo */0));
      Foo.content(input);
      _._serialize_if($scope2_reason, /* input.foo */0) && _._scope($scope2_id, {
        "#childScope/0": _._serialize_if($scope2_reason, /* input.foo */0) && _._existing_scope($childScope)
      }, "__tests__/template.marko", "5:2");
    })
  };
  Bar.content({});
});