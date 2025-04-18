import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    name
  } = input;
  _$.write(`<div>${_$.escapeXML(name)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* name */0))}</div>`);
  _$.serializeGuard($serialize, /* name */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});