import _letGlobal from "./tags/let-global.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $childScope = _._peek_scope_id();
  let a = _letGlobal({
    value: "count"
  });
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_a/var");
  let b = a + 1;
  _._html(`<div>${_._escape(a)}${_._el_resume($scope0_id, "#text/2")}</div><div>${_._escape(b)}${_._el_resume($scope0_id, "#text/3")}</div><button>${_._escape(`${a},${b}`)}${_._el_resume($scope0_id, "#text/5")}</button>${_._el_resume($scope0_id, "#button/4")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    a,
    b,
    "#childScope/0": _._existing_scope($childScope)
  }, "__tests__/template.marko", 0, {
    a: "1:13",
    b: "2:6"
  });
  _._resume_branch($scope0_id);
}, 1);