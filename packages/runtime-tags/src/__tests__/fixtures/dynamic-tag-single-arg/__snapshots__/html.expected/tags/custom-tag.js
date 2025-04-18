import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/custom-tag.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(input)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input */0))}</div>`);
  const $return = "hello from other";
  _$.serializeGuard($serialize, /* input */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/custom-tag.marko", 0);
  return $return;
});