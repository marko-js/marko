import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const value = input.value;
  _$.write(`${_$.commentSeparator(_$.serializeGuard($serialize, /* input.value */0))}${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.value */0))} `);
  _$.serializeGuard($serialize, /* input.value */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});