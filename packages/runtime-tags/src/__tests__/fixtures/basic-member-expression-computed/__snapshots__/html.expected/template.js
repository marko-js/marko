import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let items = ["a", "b", "c"];
  let index = 0;
  _._html(`<div>${_._escape(items[0])}${_._el_resume($scope0_id, "#text/0")}</div><div>${_._escape(items[index])}${_._el_resume($scope0_id, "#text/1")}</div><button>Update</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0_items_index");
  _._scope($scope0_id, {
    items,
    index
  }, "__tests__/template.marko", 0, {
    items: "1:5",
    index: "2:5"
  });
  _._resume_branch($scope0_id);
});