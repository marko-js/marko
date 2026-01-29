import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
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
  _._html(`<div class=abc>${_._escape(a)} ${_._escape(b)} ${_._escape(c)}</div><div class=rest>${_._escape(JSON.stringify(rest))}</div><div class=rest2>${_._escape(JSON.stringify(rest2))}</div><div class=rest3>${_._escape(JSON.stringify(rest3))}</div>`);
});