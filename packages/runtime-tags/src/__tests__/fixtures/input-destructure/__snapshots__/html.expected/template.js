import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  const {
    a,
    b
  } = input;
  _$.write(`${_$.commentSeparator(_$.serializeGuard($serialize, /* a */1))}${_$.escapeXML(a)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* a */1))} ${_$.commentSeparator(_$.serializeGuard($serialize, /* b */2))}${_$.escapeXML(b)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, /* b */2))}`);
  _$.serializeGuard($serialize, /* a,b */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});