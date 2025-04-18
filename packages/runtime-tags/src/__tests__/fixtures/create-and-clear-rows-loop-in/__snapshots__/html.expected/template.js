import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", (input, $serialize) => {
  const $scope0_id = _$.nextScopeId();
  _$.write("<div>");
  _$.resumeSingleNodeForIn(input.children, (key, text) => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode($scope1_id, "#text/0", _$.serializeGuard($serialize, /* input.children */0))}: ${_$.commentSeparator(_$.serializeGuard($serialize, /* input.children */0))}${_$.escapeXML(text)}${_$.markResumeNode($scope1_id, "#text/1", _$.serializeGuard($serialize, /* input.children */0))}</p>`);
    _$.serializeGuard($serialize, /* input.children */0) && _$.writeScope($scope1_id, {}, "__tests__/template.marko", "2:4");
  }, 0, $scope0_id, "#text/0", _$.serializeGuard($serialize, /* input.children */0), _$.serializeGuard($serialize, /* input.children */0));
  _$.resumeSingleNodeForIn(input.children, key => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`<p>${_$.escapeXML(key)}${_$.markResumeNode($scope2_id, "#text/0", _$.serializeGuard($serialize, /* input.children */0))}</p>`);
    _$.serializeGuard($serialize, /* input.children */0) && _$.writeScope($scope2_id, {}, "__tests__/template.marko", "5:4");
  }, 0, $scope0_id, "#text/1", _$.serializeGuard($serialize, /* input.children */0), _$.serializeGuard($serialize, /* input.children */0));
  _$.write("</div>");
  _$.serializeGuard($serialize, /* input.children */0) && _$.writeScope($scope0_id, {}, "__tests__/template.marko", 0);
});