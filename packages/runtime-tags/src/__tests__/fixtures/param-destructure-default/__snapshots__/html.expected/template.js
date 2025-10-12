import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const Child = {
    content: _._content("__tests__/template.marko_1_content", ({
      foo,
      foo: {
        bar: $bar_default = 1
      } = {
        bar: 2
      }
    }) => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`<div>${_._escape($bar_default)}${_._el_resume($scope1_id, "#text/0", _._serialize_guard($scope1_reason, /* $bar_default */2))} ${_._sep(_._serialize_guard($scope1_reason, /* foo */1))}${_._escape(typeof foo)}${_._el_resume($scope1_id, "#text/1", _._serialize_guard($scope1_reason, /* foo */1))}</div>`);
      _._serialize_if($scope1_reason, /* foo, $bar_default */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:1");
    })
  };
  Child.content({
    foo: {
      bar: 0
    }
  });
  Child.content({
    foo: {}
  });
  Child.content({});
});