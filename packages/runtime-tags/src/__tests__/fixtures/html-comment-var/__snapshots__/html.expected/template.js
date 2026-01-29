import * as _ from "@marko/runtime-tags/debug/html";
import _parentEl from "./tags/parent-el.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("<div>");
  const $childScope = _._peek_scope_id();
  let divName = _parentEl({});
  _._var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_divName/var");
  _._html(`${_._escape(divName)}${_._el_resume($scope0_id, "#text/2")}</div><span>`);
  const $childScope2 = _._peek_scope_id();
  let spanName = _parentEl({});
  _._var($scope0_id, "#scopeOffset/4", $childScope2, "__tests__/template.marko_0_spanName/var");
  _._html(`${_._escape(spanName)}${_._el_resume($scope0_id, "#text/5")}</span>`);
  _._scope($scope0_id, {
    "#childScope/0": _._existing_scope($childScope),
    "#childScope/3": _._existing_scope($childScope2)
  }, "__tests__/template.marko", 0);
});