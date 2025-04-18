import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    class: className
  } = input;
  _$.write(`<div${_$.classAttr(className)}></div>${_$.markResumeNode($scope0_id, "#div/0", _$.serializeGuard($serialize, /* className */0))}`);
  _$.serializeGuard($serialize, /* className */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
});