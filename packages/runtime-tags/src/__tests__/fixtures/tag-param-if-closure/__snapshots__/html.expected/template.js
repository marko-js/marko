import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_reason = _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  const a = "abc";
  const Foo = {
    content: _._content("__tests__/template.marko_3_content", input => {
      const $scope3_id = _._scope_id();
      const $scope3_reason = _._scope_reason();
      _._dynamic_tag($scope3_id, "#text/0", input.content, [input.value], 0, 1, _._serialize_guard($scope3_reason, /* input.content, input.value */0));
      _._serialize_if($scope3_reason, /* input.content, input.value */0) && _._scope($scope3_id, {
        input_content: _._serialize_if($scope3_reason, /* input.value */2) && input.content,
        input_value: _._serialize_if($scope3_reason, /* input.content */1) && input.value
      }, "__tests__/template.marko", "3:2", {
        input_content: ["input.content", "3:13"],
        input_value: ["input.value", "3:13"]
      });
    })
  };
  _._html(`<button>Increment</button>${_._el_resume($scope0_id, "#button/0")}`);
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.content, input.value */0: /* count */1,
    /* input.value */2: /* count */1
  });
  Foo.content({
    value: count,
    content: _._content_resume("__tests__/template.marko_1_content", v => {
      const $scope1_reason = _._scope_reason();
      const $scope1_id = _._scope_id();
      _._if(() => {
        if (v) {
          const $scope2_id = _._scope_id();
          _._html(_._escape(a));
          _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id)
          }, "__tests__/template.marko", "10:4");
          return 0;
        }
      }, $scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* v */0), _._serialize_guard($scope1_reason, /* v */0), _._serialize_guard($scope1_reason, /* v */0), 0, 1);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "9:2");
    }, $scope0_id)
  });
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    a,
    "#childScope/1": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    a: "2:8"
  });
  _._resume_branch($scope0_id);
});