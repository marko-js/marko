import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/0")}<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _child({
        write: _._resume(function (state) {
          (el => el())(_._el_read_error).innerHTML = state;
        }, "__tests__/template.marko_1/write", $scope1_id)
      });
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "6:2");
      return 0;
    }
  }, $scope0_id, "#text/2");
  _._script($scope0_id, "__tests__/template.marko_0_show");
  _._scope($scope0_id, {
    show
  }, "__tests__/template.marko", 0, {
    show: "1:6"
  });
  _._resume_branch($scope0_id);
});