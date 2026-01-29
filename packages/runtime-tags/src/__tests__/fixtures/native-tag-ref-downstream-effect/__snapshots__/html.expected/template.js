import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  if (true) {
    const $scope1_id = _._scope_id();
    _._script($scope1_id, "__tests__/template.marko_1");
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "2:2");
  }
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});