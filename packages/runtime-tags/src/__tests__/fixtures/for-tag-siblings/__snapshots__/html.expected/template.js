import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const arrA = [1, 2, 3];
  _$.write("<div>");
  _$.forOf(arrA, val => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(val)}</div>`);
  });
  _$.write("</div><div>");
  _$.forOf(arrA, val => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(val)}</div>`);
  });
  _$.write("<div></div></div>");
});