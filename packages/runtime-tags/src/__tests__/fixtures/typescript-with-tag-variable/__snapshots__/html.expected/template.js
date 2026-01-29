import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = {
    y: "hello"
  };
  _._html(_._escape(x.y));
  _._resume_branch($scope0_id);
});