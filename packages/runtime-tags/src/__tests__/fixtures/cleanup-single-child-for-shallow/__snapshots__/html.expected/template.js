import * as _ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let items = [1, 2, 3];
  const write = _._resume(function (msg) {
    (el => el())(_._el_read_error).innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", $scope0_id);
  _._html(`<button>Toggle</button>${_._el_resume($scope0_id, "#button/0")}<div></div>${_._el_resume($scope0_id, "#div/1")}`);
  _._for_of(items, item => {
    const $scope1_id = _._scope_id();
    const $childScope = _._peek_scope_id();
    _._set_serialize_reason(/* items */1);
    _child({
      write: write,
      name: item
    });
    _._scope($scope1_id, {
      "#childScope/0": _._existing_scope($childScope)
    }, "__tests__/template.marko", "7:2");
  }, 0, $scope0_id, "#text/2", /* items */1, /* items */1, /* items */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._scope($scope0_id, {
    items,
    write
  }, "__tests__/template.marko", 0, {
    items: "1:6",
    write: "5:8"
  });
  _._resume_branch($scope0_id);
});