import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const text = _._resume(function () {
    return "HI";
  }, "__tests__/template.marko_0/text");
  if (1) {
    const $scope1_id = _._scope_id();
    const run = _._resume(function () {
      (el => el())(_._el_read_error).innerHTML = text();
    }, "__tests__/template.marko_1/run", $scope1_id);
    _._html(`<div></div>${_._el_resume($scope1_id, "#div/0")}`);
    _._script($scope1_id, "__tests__/template.marko_1_run");
    _._scope($scope1_id, {
      run,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "2:2", {
      run: "4:10"
    });
  }
  _._scope($scope0_id, {
    text
  }, "__tests__/template.marko", 0, {
    text: "1:8"
  });
});