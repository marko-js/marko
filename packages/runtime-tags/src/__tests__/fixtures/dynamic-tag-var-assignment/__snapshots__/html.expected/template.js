import Counter from "./tags/counter.marko";
function getCounter() {
  return Counter; // breaks tag name analysis.
}
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $getCounter_scope = _._peek_scope_id();
  let count = _._dynamic_tag($scope0_id, "#text/0", getCounter(), {});
  _._var($scope0_id, "#scopeOffset/1", $getCounter_scope, "__tests__/template.marko_0_count/var");
  _._html(`<button class=reset>reset</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});