import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  const Child = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $Child_content__input_name__closures = new Set();
      const $scope1_reason = _._scope_reason(),
        $si__input_count__OR__input_name = _._serialize_if($scope1_reason, /* input.count, input.name */0),
        $sg__input_count = _._serialize_guard($scope1_reason, /* input.count */1),
        $si__input_name = _._serialize_if($scope1_reason, /* input.name */2);
      _._if(() => {
        if (input.count) {
          const $scope2_id = _._scope_id();
          if (true) {
            const $scope3_id = _._scope_id();
            _._html(`<div>${_._escape(input.name || "Fallback")}${_._el_resume($scope3_id, "#text/0", (_._serialize_guard($scope1_reason, /* input.name */2)))}</div>`);
            ($si__input_count__OR__input_name) && _._subscribe($Child_content__input_name__closures, _._scope($scope3_id, {
              _: _._scope_with_id($scope2_id),
              "ClosureSignalIndex:input_name": ($si__input_name) && 0
            }, "__tests__/template.marko", "8:6"));
          }
          ($si__input_count__OR__input_name) && _._scope($scope2_id, {
            _: _._scope_with_id($scope1_id)
          }, "__tests__/template.marko", "7:4");
          return 0;
        }
      }, $scope1_id, "#text/0", $sg__input_count, ($sg__input_count), ($sg__input_count));
      $si__input_count__OR__input_name && _._scope($scope1_id, {
        input_name: (_._serialize_if($scope1_reason, /* input.count */1)) && input.name,
        "ClosureScopes:input_name": ($si__input_name) && $Child_content__input_name__closures
      }, "__tests__/template.marko", "6:2", {
        input_name: ["input.name", "6:15"]
      });
    })
  };
  const $childScope = _._peek_scope_id();
  _._set_serialize_reason({
    /* input.count, input.name */0: /* count */1,
    /* input.count */1: /* count */1
  });
  Child.content({
    count: count
  });
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    "#childScope/2": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
}, 1);