import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write(`Hello ${_$.commentSeparator(_$.serializeGuard($serialize, /* input.name */1))}${_$.escapeXML(input.name)}${_$.markResumeNode($scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.name */1))}! Hello ${_$.commentSeparator(_$.serializeGuard($serialize, /* input.name */1))}${_$.toString(input.name)}${_$.markResumeNode($scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.name */1))}! Hello ${_$.commentSeparator(_$.serializeGuard($serialize, /* input.missing */2))}${_$.toString(input.missing)}${_$.markResumeNode($scope0_id, "#text/2", _$.serializeGuard($serialize, /* input.missing */2))}!`);
  _$.serializeGuard($serialize, /* input.name,input.missing */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});