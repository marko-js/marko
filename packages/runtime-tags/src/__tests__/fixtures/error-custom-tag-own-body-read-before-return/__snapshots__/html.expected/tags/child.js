import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/tags/child.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $inputcontent_scope = _._peek_scope_id();
  let r = _._dynamic_tag($scope0_id, "#text/0", input.content, {});
  _._var($scope0_id, "#scopeOffset/1", $inputcontent_scope, "__tests__/tags/child.marko_0_r/var");
  debugger;
  const $return = r;
  _._scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
  return $return;
});