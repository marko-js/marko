import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/tags/child2.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<div>Child 2 has ${_$.commentSeparator(_$.serializeGuard($serialize, /* value */0))}${_$.escapeXML(value)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* value */0))}</div>`);
  _$.serializeGuard($serialize, /* value */0) && _$.writeScope($scope0_id, {}, "__tests__/tags/child2.marko", 0);
});