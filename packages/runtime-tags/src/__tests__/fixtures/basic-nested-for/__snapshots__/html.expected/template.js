import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let items = [0, 1];
  _._html(`<button>Push</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._for_of(items, outer => {
    const $scope1_id = _._scope_id();
    _._for_of(items, inner => {
      const $scope2_id = _._scope_id();
      const $childScope = _._peek_scope_id();
      _._set_serialize_reason(/* items */1);
      _child({
        name: `${outer}.${inner}`
      });
      _._scope($scope2_id, {
        _: _._scope_with_id($scope1_id),
        "#childScope/0": _._existing_scope($childScope)
      }, "__tests__/template.marko", "5:4");
    }, 0, $scope1_id, "#text/0", /* items */1, /* items */1, /* items */1, 0, 1);
    _._scope($scope1_id, {
      outer,
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "4:2", {
      outer: "4:6"
    });
  }, 0, $scope0_id, "#text/1");
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._scope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "1:6"
  });
  _._resume_branch($scope0_id);
});