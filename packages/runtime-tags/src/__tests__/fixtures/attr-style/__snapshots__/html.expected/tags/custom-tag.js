import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    style
  } = input;
  _$.write(`<div${_$.styleAttr(style)}></div>${_$.markResumeNode($scope0_id, "#div/0")}`);
});