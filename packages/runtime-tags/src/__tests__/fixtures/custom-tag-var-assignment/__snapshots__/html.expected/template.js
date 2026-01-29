import _counter from "./tags/counter.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  let count = _counter({});
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count/var");
  _._html(`<button class=inc-parent>${_._escape(count)}${_._el_resume($scope0_id, "#text/3")}</button>${_._el_resume($scope0_id, "#button/2")}<button class=reset>reset</button>${_._el_resume($scope0_id, "#button/4")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    count: "1:10"
  });
});