import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let x = 1;
  _._html(`<button>Count: <!>${_._escape(x)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  const $tags0_scope = _._peek_scope_id();
  let y = _._dynamic_tag($scope0_id, "#text/2", tags[0], [x], 0, 1);
  _._var($scope0_id, "#scopeOffset/3", $tags0_scope, "__tests__/template.marko_0_y/var");
  _._html(`<div>Parent: <!>${_._escape(y)}${_._el_resume($scope0_id, "#text/4")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_x");
  _._scope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "3:6"
  });
  _._resume_branch($scope0_id);
});