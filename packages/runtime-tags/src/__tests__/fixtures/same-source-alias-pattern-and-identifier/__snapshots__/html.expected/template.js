import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    a: {
      b
    }
  } = input;
  const {
    a
  } = input;
  const {
    b: c
  } = a;
  _$.write(`<button>${_$.escapeXML(b)}${_$.markResumeNode($scope0_id, "#text/0")} <!>${_$.escapeXML(c)}${_$.markResumeNode($scope0_id, "#text/1")}</button>`);
});