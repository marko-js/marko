import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const setText = _._resume(function (arg) {
    if (arg) {
      throw new Error(`Expected no argument to be passed, but received "${typeof arg}".`);
    }
    (el => el())(_._el_read_error).textContent = typeof arg;
  }, "__tests__/template.marko_0/setText", $scope0_id);
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0_setText");
  _._scope($scope0_id, {
    setText
  }, "__tests__/template.marko", 0, {
    setText: "2:8"
  });
});