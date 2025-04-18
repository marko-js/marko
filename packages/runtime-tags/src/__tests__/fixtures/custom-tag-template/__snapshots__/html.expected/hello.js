import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/hello.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`Hello ${_$.commentSeparator(_$.serializeGuard($serialize, /* input.name */0))}${_$.escapeXML(input.name)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.name */0))}!`);
  _$.serializeGuard($serialize, /* input.name */0) && _$.writeScope($scope0_id, {}, "__tests__/hello.marko", 0);
});