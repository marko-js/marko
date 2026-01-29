import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = input.value;
  _._html("<div>");
  _._if(() => {
    if (value) {
      const $scope1_id = _._scope_id();
      _._html(`<span>${_._escape(value)}${_._el_resume($scope1_id, "#text/0")}</span>`);
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "4:4");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* value */1, /* value */1, "</div>", 1);
  _._html(`<input${_._attr_input_value($scope0_id, "#input/1", value, _._resume(_new_value => {
    value = _new_value;
  }, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_._el_resume($scope0_id, "#input/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    value
  }, "__tests__/template.marko", 0, {
    value: "1:6"
  });
  _._resume_branch($scope0_id);
});