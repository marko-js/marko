import * as _ from "@marko/runtime-tags/debug/html";
import _counter from "./tags/counter.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = true;
  const onCount = _._resume(function (count) {
    show = count < 1;
  }, "__tests__/template.marko_0/onCount", $scope0_id);
  _._html("<div>");
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._html("<div>");
      _counter({
        onCount: onCount
      });
      _._html("</div>");
      _._scope($scope1_id, {}, "__tests__/template.marko", "6:4");
      return 0;
    }
  }, $scope0_id, "#div/0", 1, /* show */1, /* show */1, "</div>", 1);
  _._scope($scope0_id, {
    onCount
  }, "__tests__/template.marko", 0, {
    onCount: "2:8"
  });
  _._resume_branch($scope0_id);
});