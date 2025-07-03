import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const {
    a,
    ...rest
  } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  const {
    b,
    ...rest2
  } = rest;
  const {
    c,
    ...rest3
  } = rest2;
  _$.write(`<div class=abc>${_$.escapeXML(a)} ${_$.escapeXML(b)} ${_$.escapeXML(c)}</div><div class=rest>${_$.escapeXML(JSON.stringify(rest))}</div><div class=rest2>${_$.escapeXML(JSON.stringify(rest2))}</div><div class=rest3>${_$.escapeXML(JSON.stringify(rest3))}</div>`);
});