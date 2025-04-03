import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<button>Count: <!>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  const $dynamicScope = _$.peekNextScope();
  const y = _$.dynamicTag($scope0_id, "#text/2", tags[0], [x], 0, 1, 1);
  _$.setTagVar($scope0_id, "#scopeOffset/3", $dynamicScope, "__tests__/template.marko_0_y/var");
  _$.write(`<div>Parent: <!>${_$.escapeXML(y)}${_$.markResumeNode($scope0_id, "#text/4")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});