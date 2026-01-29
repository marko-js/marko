import child from "./tags/child/index.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let data1 = child({});
  const $inputshowchild_scope = _._peek_scope_id();
  let data2 = _._dynamic_tag($scope0_id, "#text/2", input.show && child, {});
  _._var($scope0_id, "#scopeOffset/3", $inputshowchild_scope, "__tests__/template.marko_0_data2/var");
  const $inputdynamic_scope = _._peek_scope_id();
  let data3 = _._dynamic_tag($scope0_id, "#text/4", input.dynamic, {});
  _._var($scope0_id, "#scopeOffset/5", $inputdynamic_scope, "__tests__/template.marko_0_data3/var");
  const $inputshowdiv_scope = _._peek_scope_id();
  let el1 = _._dynamic_tag($scope0_id, "#text/6", input.show && "div", {});
  _._var($scope0_id, "#scopeOffset/7", $inputshowdiv_scope, "__tests__/template.marko_0_el1/var");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});