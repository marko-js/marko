import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  const resetCount = _._resume(function () {
    if (count > 0) {
      count = 0;
    }
  }, "__tests__/template.marko_0/resetCount", $scope0_id);
  _._html(`<button>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}<button></button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_resetCount");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    resetCount
  }, "__tests__/template.marko", 0, {
    count: "1:6",
    resetCount: "2:8"
  });
  _._resume_branch($scope0_id);
});