import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  _.forOf(arr, (val, i) => {
    const $scope1_id = _._scope_id();
    _._html(`<div>${_._escape(i)}: ${_._escape(val)}</div><div></div><div></div>`);
  });
  _.forIn(obj, (key, val) => {
    const $scope2_id = _._scope_id();
    _._html(`<div>${_._escape(key)}: ${_._escape(val)}</div><div></div><div></div>`);
  });
  _.forTo(10, 0, 2, i => {
    const $scope3_id = _._scope_id();
    _._html(`<div>${_._escape(i)}</div><div></div><div></div>`);
  });
  _.forOf(arr, (val, i) => {
    const $scope4_id = _._scope_id();
    _._html(`<div${_._attr("key", i)}>${_._escape(i)}: ${_._escape(val)}</div><div></div><div${_._attr("key", `other-${i}`)}></div>`);
  });
  _.forIn(obj, (key, val) => {
    const $scope5_id = _._scope_id();
    _._html(`<div${_._attr("key", key)}>${_._escape(key)}: ${_._escape(val)}</div><div></div><div${_._attr("key", `other-${key}`)}></div>`);
  });
  _.forTo(10, 0, 2, i => {
    const $scope6_id = _._scope_id();
    _._html(`<div${_._attr("key", i)}>${_._escape(i)}</div><div></div><div${_._attr("key", `other-${i}`)}></div>`);
    _.forTo(10, 0, 2, i => {
      const $scope7_id = _._scope_id();
      _._html(`<div${_._attr("key", i)}>${_._escape(i)}</div><div></div><div${_._attr("key", `other-${i}`)}></div>`);
    });
  });
  _.forTo(0, 10, -2, i => {
    const $scope8_id = _._scope_id();
    _._html(`<div${_._attr("key", i)}>${_._escape(i)}</div><div></div><div${_._attr("key", `other-${i}`)}></div>`);
  });
  _.forTo(10, 0, 1, () => {
    const $scope9_id = _._scope_id();
    _._html("Hello");
  });
  _.forTo(10, 0, 1, () => {
    const $scope10_id = _._scope_id();
    _._html("Hello");
  });
});