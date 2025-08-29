import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/price.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`<div>${_$.escapeXML(input.format(input.value))}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input */0))}</div>`);
  _$.serializeGuard($serialize, /* input */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/price.marko", 0);
});