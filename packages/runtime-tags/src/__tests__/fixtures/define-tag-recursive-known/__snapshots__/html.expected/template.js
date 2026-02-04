import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Foo = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._if(() => {
        if (input.bar) {
          const $scope2_id = _._scope_id();
          const $childScope = _._peek_scope_id();
          _._set_serialize_reason({
            /* input.bar, input.message */0: _._serialize_guard($scope1_reason, /* input.bar */1),
            /* input.message */2: _._serialize_guard($scope1_reason, /* input.bar */1)
          });
          Foo.content({
            message: input.bar
          });
          _._serialize_if($scope1_reason, /* input.bar */1) && _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id),
            "#childScope/0": _._serialize_if($scope1_reason, /* input.bar */1) && _._existing_scope($childScope)
          }, "__tests__/template.marko", "2:3");
          return 0;
        } else {
          const $scope3_id = _._scope_id();
          _._html(`${_._escape(JSON.stringify(input.message))}${_._el_resume($scope3_id, "#text/0", _._serialize_guard($scope1_reason, /* input.message */2))}`);
          _._serialize_if($scope1_reason, /* input.bar, input.message */0) && _._scope($scope3_id, {
            _: _._serialize_if($scope1_reason, /* input.message */2) && _._scope_with_id($scope1_id)
          }, "__tests__/template.marko", "4:3");
          return 1;
        }
      }, $scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* input.bar, input.message */0) || _._serialize_guard($scope1_reason, /* input.bar */1), _._serialize_guard($scope1_reason, /* input.bar */1), _._serialize_guard($scope1_reason, /* input.bar */1));
      _._serialize_if($scope1_reason, /* input.bar */1) && _._scope($scope1_id, {
        input_bar: input.bar,
        input_message: input.message
      }, "__tests__/template.marko", "1:1", {
        input_bar: ["input.bar", "1:12"],
        input_message: ["input.message", "1:12"]
      });
    })
  };
  Foo.content({
    bar: "hi"
  });
});