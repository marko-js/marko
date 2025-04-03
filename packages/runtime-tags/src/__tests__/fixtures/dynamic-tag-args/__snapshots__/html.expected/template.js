import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<button>Count: <!>${_$.escapeXML(x)}${_$.markResumeNode($scope0_id, "#text/1")}</button>${_$.markResumeNode($scope0_id, "#button/0")}`);
  _$.dynamicTag($scope0_id, "#text/2", tags[0], [x, 'foo'], 0, 1, 1);
  _$.dynamicTag($scope0_id, "#text/3", tags[0], [false], 0, 1);
  _$.dynamicTag($scope0_id, "#text/4", tags[0], [true], 0, 1);
  _$.dynamicTag($scope0_id, "#text/5", tags[0], [...["spread1", "spread2"]], 0, 1);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope($scope0_id, {
    x
  }, "__tests__/template.marko", 0, {
    x: "3:6"
  });
  _$.resumeClosestBranch($scope0_id);
});