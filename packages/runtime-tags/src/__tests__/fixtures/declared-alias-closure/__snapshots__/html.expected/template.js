import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const value = undefined;
  const Child = {
    content: _._content("__tests__/template.marko_3_content", input => {
      const $scope3_id = _._scope_id();
      _._scope_reason();
      _._html("<div");
      _._attrs_content(input, "#div/0", $scope3_id, "div");
      _._html(`</div>${_._el_resume($scope3_id, "#div/0")}`);
      _._script($scope3_id, "__tests__/template.marko_3_input");
      _._scope($scope3_id, {
        input
      }, "__tests__/template.marko", "2:2", {
        input: "2:15"
      });
    })
  };
  Child.content({
    content: _._content_resume("__tests__/template.marko_1_content", () => {
      _._scope_reason();
      const $scope1_id = _._scope_id();
      if (value) {
        const $scope2_id = _._scope_id();
        const {
          text
        } = value;
        _._html(`<span${_._attr_class(value.class)}>${_._escape(text)}</span>`);
        _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id)
        }, "__tests__/template.marko", "7:4");
      }
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "6:2");
      _._resume_branch($scope1_id);
    }, $scope0_id)
  });
  _._scope($scope0_id, {
    value,
    value_class: value?.class,
    text: value?.text
  }, "__tests__/template.marko", 0, {
    value: "1:8",
    value_class: ["value.class", "1:8"],
    text: "8:16"
  });
});