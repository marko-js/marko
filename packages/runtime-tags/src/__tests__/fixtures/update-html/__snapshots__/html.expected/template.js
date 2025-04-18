import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write(`<em>Testing</em> ${_$.commentSeparator(_$.serializeGuard($serialize, /* value */0))}${_$.toString(value)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* value */0))}`);
  _$.serializeGuard($serialize, /* value */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});