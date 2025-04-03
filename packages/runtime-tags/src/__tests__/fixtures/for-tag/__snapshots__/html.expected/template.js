import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  _$.forOf(arr, (val, i) => {
    const $scope1_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}: ${_$.escapeXML(val)}</div><div></div><div></div>`);
  });
  _$.forIn(obj, (key, val) => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(key)}: ${_$.escapeXML(val)}</div><div></div><div></div>`);
  });
  _$.forTo(10, 0, 2, i => {
    const $scope3_id = _$.nextScopeId();
    _$.write(`<div>${_$.escapeXML(i)}</div><div></div><div></div>`);
  });
  _$.forOf(arr, (val, i) => {
    const $scope4_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}: ${_$.escapeXML(val)}</div><div></div><div${_$.attr("key", `other-${i}`)}></div>`);
  });
  _$.forIn(obj, (key, val) => {
    const $scope5_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", key)}>${_$.escapeXML(key)}: ${_$.escapeXML(val)}</div><div></div><div${_$.attr("key", `other-${key}`)}></div>`);
  });
  _$.forTo(10, 0, 2, i => {
    const $scope6_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}</div><div></div><div${_$.attr("key", `other-${i}`)}></div>`);
    _$.forTo(10, 0, 2, i => {
      const $scope7_id = _$.nextScopeId();
      _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}</div><div></div><div${_$.attr("key", `other-${i}`)}></div>`);
    });
  });
  _$.forTo(0, 10, -2, i => {
    const $scope8_id = _$.nextScopeId();
    _$.write(`<div${_$.attr("key", i)}>${_$.escapeXML(i)}</div><div></div><div${_$.attr("key", `other-${i}`)}></div>`);
  });
  _$.forTo(10, 0, 1, () => {
    const $scope9_id = _$.nextScopeId();
    _$.write("Hello");
  });
  _$.forTo(10, 0, 1, () => {
    const $scope10_id = _$.nextScopeId();
    _$.write("Hello");
  });
});