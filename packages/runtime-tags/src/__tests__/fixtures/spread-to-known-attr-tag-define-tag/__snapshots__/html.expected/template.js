import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const Child = {
    content: _._content("__tests__/template.marko_1_content", input => {
      const $scope1_id = _._scope_id();
      const $scope1_reason = _._scope_reason();
      _._html(`<select${_._attr_class(input.class)}>`);
      _._for_of(input.option, option => {
        const $scope3_id = _._scope_id();
        _._html("<option");
        _._attrs_content(option, "#option/0", $scope3_id, "option");
        _._html(`</option>${_._el_resume($scope3_id, "#option/0")}`);
        _._script($scope3_id, "__tests__/template.marko_3_option");
        _._scope($scope3_id, {
          option
        }, "__tests__/template.marko", "3:6", {
          option: "3:10"
        });
      }, 0, $scope1_id, "#select/0", _._serialize_guard($scope1_reason, /* input.option */1), _._serialize_guard($scope1_reason, /* input.class, input.option */0), _._serialize_guard($scope1_reason, /* input.option */1), "</select>", 1);
      _._serialize_if($scope1_reason, /* input.class, input.option */0) && _._scope($scope1_id, {}, "__tests__/template.marko", "1:2");
    })
  };
  const Wrap = {
    content: _._content("__tests__/template.marko_2_content", ({
      class: _class,
      ...rest
    }) => {
      const $scope2_id = _._scope_id();
      const $scope2_reason = _._scope_reason();
      const $childScope = _._peek_scope_id();
      _._set_serialize_reason({
        /* input.class, input.option */0: _._serialize_guard($scope2_reason, /* _class, rest.option */0),
        /* input.option */1: _._serialize_guard($scope2_reason, /* rest.option */1)
      });
      Child.content({
        class: _class,
        ...rest
      });
      _._serialize_if($scope2_reason, /* _class, rest.option */0) && _._scope($scope2_id, {
        "#childScope/0": _._serialize_if($scope2_reason, /* _class, rest.option */0) && _._existing_scope($childScope)
      }, "__tests__/template.marko", "9:2");
    })
  };
  Wrap.content({
    class: "foo",
    option: _.attrTags(_.attrTags(_.attrTag({
      value: 1,
      content: _._content_resume("__tests__/template.marko_4_content", () => {
        _._scope_reason();
        const $scope4_id = _._scope_id();
        _._html("One");
      }, $scope0_id)
    }), {
      value: 2,
      content: _._content_resume("__tests__/template.marko_5_content", () => {
        _._scope_reason();
        const $scope5_id = _._scope_id();
        _._html("Two");
      }, $scope0_id)
    }), {
      value: 3,
      content: _._content_resume("__tests__/template.marko_6_content", () => {
        _._scope_reason();
        const $scope6_id = _._scope_id();
        _._html("Three");
      }, $scope0_id)
    })
  });
});