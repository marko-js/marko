import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
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
  _._html("<div>to 3: ");
  _.forTo(3, 0, 1, i => {
    const $scope3_id = _._scope_id();
    _._html(_._escape(i));
  });
  _._html("</div><div>until 3: ");
  _.forUntil(3, 0, 1, i => {
    const $scope4_id = _._scope_id();
    _._html(_._escape(i));
  });
  _._html("</div><div>from 1 to 3: ");
  _.forTo(3, 1, 1, i => {
    const $scope5_id = _._scope_id();
    _._html(_._escape(i));
  });
  _._html("</div><div>from 1 until 3: ");
  _.forUntil(3, 1, 1, i => {
    const $scope6_id = _._scope_id();
    _._html(_._escape(i));
  });
  _._html("</div><div>from 1 to 5 step 2: ");
  _.forTo(5, 1, 2, i => {
    const $scope7_id = _._scope_id();
    _._html(_._escape(i));
  });
  _._html("</div><div>from 1 until 5 step 2: ");
  _.forUntil(5, 1, 2, i => {
    const $scope8_id = _._scope_id();
    _._html(_._escape(i));
  });
  _._html("</div><div>from 4 to 2 step -0.6: ");
  _.forTo(2, 4, -.6, i => {
    const $scope9_id = _._scope_id();
    _._html(`${_._escape(i)} `);
  });
  _._html("</div><div>from 4 until 2 step -0.6: ");
  _.forUntil(2, 4, -.6, i => {
    const $scope10_id = _._scope_id();
    _._html(`${_._escape(i)} `);
  });
  _._html("</div>");
});