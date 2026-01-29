import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let a = 0;
  let b = 0;
  if (true) {
    const $scope1_id = _._scope_id();
    _._html(_._escape(a + b));
  }
  _._resume_branch($scope0_id);
});